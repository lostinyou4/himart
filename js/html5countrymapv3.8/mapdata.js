var simplemaps_countrymap_mapdata={
  main_settings: {
    //General settings
		width: "450", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#e2e1e1",
    pop_ups: "detect",
    
		//State defaults
		state_description: "",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 0.5,
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
		//Location defaults
		location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
		//Label defaults
		label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
		//Zoom settings
		zoom: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "no",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
		//Popup settings
		popup_color: "white",
    popup_opacity: 1,
    popup_shadow: 1,
    popup_corners: 3,
    popup_font: "seoul-namsan-jung-l, 12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
		//Advanced settings
		div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    KOR2494: {
      name: "충청북도",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    KOR2495: {
      name: "인천"
    },
    KOR2496: {
      name: "강원도"
    },
    KOR2497: {
      name: "서울"
    },
    KOR2498: {
      name: "경기도"
    },
    KOR2499: {
      name: "전라북도"
    },
    KOR2500: {
      name: "광주"
    },
    KOR2502: {
      name: "충청남도"
    },
    KOR2503: {
      name: "대전"
    },
    KOR2504: {
      name: "대구"
    },
    KOR2505: {
      name: "경상남도"
    },
    KOR2506: {
      name: "전라남도"
    },
    KOR2507: {
      name: "부산"
    },
    KOR2508: {
      name: "울산"
    },
    KOR2509: {
      name: "경상북도"
    },
    KOR2510: {
      name: "제주"
    },
    KOR5129: {
      name: "세종"
    }
  },/*
  locations: {
    "0": {
      lat: "37.5985",
      lng: "126.9783",
      name: "서울"
    }
  }*/
};