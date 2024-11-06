import React, { Component, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import SlidingPanel from "./SlidingPanel";
import Navbar from "../Navbar";

// Loading Screen Component
const LoadingScreen = () => {
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerHTML = `
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .spinner {
        width: 50px;
        height: 50px;
        border: 8px solid #f3f3f3;
        border-top: 8px solid #3498db;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div style={loadingScreenStyle}>
      <div className="spinner"></div>
      <p style={loadingTextStyle}>Loading...</p>
    </div>
  );
};

const loadingScreenStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  backgroundColor: "#ffffff",
  zIndex: 1000,
};

const loadingTextStyle = {
  marginTop: "10px",
  fontSize: "18px",
  color: "#333",
};

const mapStyles = {
  width: "100vw",
  height: "100vh",
};

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 22.2988, lng: 114.1722 },
      activeMarker: null,
      selectedPlace: {},
      showingInfoWindow: false,
      isPanelExpanded: false,
      searchLocation: null,
      searchTerm: "",
      showHotelMarker: false,
      showRetailMarker: false,
      showLifestyleMarker: false,
      showDiningMarker: false,
      loading: true,
    };
    this.autocomplete = null;
  }

  componentDidMount() {
    const { google } = this.props;
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      { types: ["geocode"] }
    );
    this.autocomplete.addListener("place_changed", this.handlePlaceSelect);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.setState({ currentLocation });
        },
        (error) => console.error(error)
      );
    }
  }

  handlePlaceSelect = () => {
    const place = this.autocomplete.getPlace();
    if (place.geometry) {
      this.setState({
        searchLocation: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        },
        showingInfoWindow: true,
        selectedPlace: { name: place.name },
        activeMarker: null,
      });
    }
  };

  handleSuggestionClick = (suggestion) => {
    let coordinates;
    let placeName;
    let markerState;

    switch (suggestion) {
      case "hotel":
        coordinates = { lat: 22.302711, lng: 114.177216 };
        placeName = "Hotel";
        markerState = {
          showRetailMarker: false,
          showHotelMarker: true,
          showLifestyleMarker: false,
          showDiningMarker: false,
        };
        break;
      case "retail":
        coordinates = { lat: 22.280847, lng: 114.158917 };
        placeName = "Retail";
        markerState = {
          showRetailMarker: true,
          showHotelMarker: false,
          showLifestyleMarker: false,
          showDiningMarker: false,
        };
        break;
      case "lifestyle":
        coordinates = { lat: 22.319303, lng: 114.169361 };
        placeName = "Lifestyle";
        markerState = {
          showRetailMarker: false,
          showHotelMarker: false,
          showLifestyleMarker: true,
          showDiningMarker: false,
        };
        break;
      case "dining":
        coordinates = { lat: 22.28552, lng: 114.15769 };
        placeName = "Dining";
        markerState = {
          showRetailMarker: false,
          showHotelMarker: false,
          showLifestyleMarker: false,
          showDiningMarker: true,
        };
        break;
      default:
        coordinates = this.state.currentLocation;
        placeName = "Current Location";
    }

    this.setState({
      ...markerState,
      searchTerm: suggestion,
      searchLocation: coordinates,
      showingInfoWindow: false,
      activeMarker: null,
      selectedPlace: { name: placeName },
    });
  };

  onMarkerClick = (props, marker) => {
    const contentData = this.getPlaceContent(props.name);
    this.setState({
      selectedPlace: contentData,
      activeMarker: marker,
      showingInfoWindow: true,
      isPanelExpanded: false,
    });
  };

  getPlaceContent = (placeName) => {
    const placeData = {
      Hotel: {
        name: "JW Marriot Bonvoy",
        location: "22.302711, 114.177216",
        images: [
          "https://lh5.googleusercontent.com/p/AF1QipMqyUjs12Svb9JDiHcGGypQgkmcKMC2lTbz1Xhq=w253-h189-k-no",
          "https://lh5.googleusercontent.com/p/AF1QipMuLAVR2604gf29WoA68uYd2SuH5ThX1OiHgbT-=w253-h168-k-no",
        ],
        description: "A luxurious hotel with stunning views.",
        moreInfo:
          "Detailed information about hotel amenities and nearby attractions.",
      },
      Retail: {
        name: "Cathay Pacific Shop",
        location: "22.280847, lng: 114.158917",
        images: [
          "https://www.cathaypacific.com/content/dam/focal-point/cx/shopping/hk/Cathay_Shop_Cityplaza_new_2400x1600.renditionimage.900.600.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaytGvxtNDd39Muavc8kTWl_-uZIAQpLONrg&s",
        ],
        description: "A bustling retail hub with diverse shops.",
        moreInfo:
          "Discover the best retail stores, discounts, and popular brands here.",
      },
      Lifestyle: {
        name: "Avis Car Rental",
        location: "22.319303, lng: 114.169361",
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjcnk8p64BWGR3_M6Yb6Zf8iXjx3zwMMGJjg&s",
          "https://www.asiamiles.com/content/dam/am-content/brand-v2/transport-pillar/product-image/avis/Avis%20new%20logo_1500x900.png",
        ],
        description: "Enjoy lifestyle amenities and wellness options.",
        moreInfo:
          "Get insights on lifestyle services, spa treatments, and wellness programs.",
      },
      Dining: {
        name: "Alto Bar and Grill",
        location: "22.28552, lng: 114.15769",
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2oo1aM-8ZITu5h5eaj5Ssz17l2-PN06mJA&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-z4_5MlJ6ruE6RDUxX2mEsEOqbxt1olsxkQ&s",
        ],
        description: "A gourmet dining experience with multiple cuisines.",
        moreInfo: "Explore the menu, chef’s specials, and reservation options.",
      },
    };
    return placeData[placeName] || {};
  };

  handleToggleExpand = (isExpanded) => {
    this.setState({ isPanelExpanded: isExpanded });
  };

  render() {
    const {
      currentLocation,
      showingInfoWindow,
      selectedPlace,
      isPanelExpanded,
      searchLocation,
      showHotelMarker,
      showRetailMarker,
      showLifestyleMarker,
      showDiningMarker,
      loading,
    } = this.state;

    return (
      <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
        {/* Loading Screen */}
        {loading && <LoadingScreen />}

        {/* Main Map Content */}
        <div style={{ width: "100%", height: "calc(100vh - 50px)" }}>
          {/* Search Bar and Category Buttons */}
          {!isPanelExpanded && (
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1,
                textAlign: "center",
              }}
            >
              <input
                id="autocomplete"
                type="text"
                placeholder="Search Location"
                style={{
                  width: "300px",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  marginBottom: "10px",
                  backgroundColor: "#ffffff",
                  color: "#333",
                  fontSize: "16px",
                }}
              />
              <div style={{ display: "flex", gap: "5px" }}>
                {["hotel", "retail", "lifestyle", "dining"].map((type) => (
                  <button
                    key={type}
                    onClick={() => this.handleSuggestionClick(type)}
                    style={{
                      padding: "10px",
                      borderRadius: "5px",
                      backgroundColor: "#ffffff",
                      border: "1px solid #ccc",
                      color: "#333",
                      fontSize: "14px",
                    }}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}

          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={searchLocation || currentLocation}
            onReady={() => this.setState({ loading: false })}
            onClick={() => this.setState({ showingInfoWindow: false })}
          >
            {showHotelMarker && (
              <Marker
                position={{ lat: 22.302711, lng: 114.177216 }}
                onClick={this.onMarkerClick}
                name="Hotel"
                icon={{
                  url: markerIcon,
                  scaledSize: new this.props.google.maps.Size(45, 45),
                  className: "map-marker-icon",
                }}
              />
            )}
            {showRetailMarker && (
              <Marker
                position={{ lat: 22.280847, lng: 114.158917 }}
                onClick={this.onMarkerClick}
                name="Retail"
                icon={{
                  url: markerIcon,
                  scaledSize: new this.props.google.maps.Size(45, 45),
                  className: "map-marker-icon",
                }}
              />
            )}
            {showLifestyleMarker && (
              <Marker
                position={{ lat: 22.319303, lng: 114.169361 }}
                onClick={this.onMarkerClick}
                name="Lifestyle"
                icon={{
                  url: markerIcon,
                  scaledSize: new this.props.google.maps.Size(45, 45),
                  className: "map-marker-icon",
                }}
              />
            )}
            {showDiningMarker && (
              <Marker
                position={{ lat: 22.28552, lng: 114.15769 }}
                onClick={this.onMarkerClick}
                name="Dining"
                icon={{
                  url: markerIcon,
                  scaledSize: new this.props.google.maps.Size(45, 45),
                  className: "map-marker-icon",
                }}
              />
            )}
          </Map>

          {showingInfoWindow && (
            <SlidingPanel
              placeData={selectedPlace}
              isExpanded={isPanelExpanded}
              onToggleExpand={this.handleToggleExpand}
              icon={{
                url: markerIcon,
                scaledSize: new this.props.google.maps.Size(45, 45),
                className: "map-marker-icon",
              }}
            />
          )}
        </div>

        {/* Fixed Navbar at the Bottom */}
        <Navbar
          style={{
            position: "fixed",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "50px",
            zIndex: 1,
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBjlFso7gIEgHMWMEZc0Dp9T8ZnEvy7-XY",
})(MapContainer);
