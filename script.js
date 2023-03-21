const dataByYears = [
	{
		year: 1910,
		layers: [
			{ layerID: "abad00b4ad484e9bb66b499816f35876", opacity: 1.0, featureLayer: null, infoLayer: "ORP", name: "ORP", featureVisibility: true },
			{ layerID: "afa4ff69d2f74f8b82b1ebdf002f07aa", opacity: 1.0, featureLayer: null, infoLayer: "POU", name: "POU", featureVisibility: false },
			{ layerID: "f14869d64d1c459a8d1974ec91b59936", opacity: 0.9, featureLayer: null, infoLayer: "obce", name: "obceSouc", featureVisibility: true },
			{ layerID: "1470f53a79744a42875a473332c3233d", opacity: 0.9, featureLayer: null, infoLayer: "osady", name: "katSoucPol", featureVisibility: false },
			{ layerID: "ab83e6b37ee84a72900b54c8d9a3e72a", opacity: 0.9, featureLayer: null, infoLayer: "častOsady", name: "ZSJSoucBod", featureVisibility: true },
			{ layerID: "b785e7046d454db7869a6d3b877f9c1d", opacity: 0.9, featureLayer: null, infoLayer: "katastry", name: "castObcPol", featureVisibility: false },
			{ layerID: "8e76bbc2638141c0a519dc51cdbbeb82", opacity: 0.9, featureLayer: null, infoLayer: "pavouk", name: "ZSJPol", featureVisibility: false },
			{ layerID: "1cfec9b5ee5244c6bc78208576208d69", opacity: 0.9, featureLayer: null, infoLayer: "SO46", name: "soudOkresy", featureVisibility: false }
			
		],
		options: ["attSelect", "signSelect", "valSelect"],
	},
	{
		year: 1921,
		layers: [
			{ layerID: "abad00b4ad484e9bb66b499816f35876", opacity: 1.0, featureLayer: null, infoLayer: "ORP", name: "ORP", featureVisibility: true },
			{ layerID: "afa4ff69d2f74f8b82b1ebdf002f07aa", opacity: 1.0, featureLayer: null, infoLayer: "POU", name: "POU", featureVisibility: true },
			{ layerID: "f0b3d154c1c14f468fa08db55f5aee3d", opacity: 0.9, featureLayer: null, infoLayer: "obce", name: "obceSouc", featureVisibility: true },
			{ layerID: "94f382c6fd23405a9ef829aa93d90933", opacity: 0.9, featureLayer: null, infoLayer: "osady", name: "katSoucPol", featureVisibility: true },
			{ layerID: "2b4e68caeef94237b5cdc1db13fae40e", opacity: 0.9, featureLayer: null, infoLayer: "častOsady", name: "ZSJSoucBod", featureVisibility: true },
			{ layerID: "18afa04e3bbc48d4b9d99bab2ea700ef", opacity: 0.9, featureLayer: null, infoLayer: "katastry", name: "castObcPol", featureVisibility: true },
			{ layerID: "c38ca29b33dd434788b4b19cce61f62f", opacity: 0.9, featureLayer: null, infoLayer: "pavouk", name: "ZSJPol", featureVisibility: true },
			{ layerID: "1cfec9b5ee5244c6bc78208576208d69", opacity: 0.9, featureLayer: null, infoLayer: "SO46", name: "soudOkresy", featureVisibility: true }
		],
		options: ["attSelect", "signSelect", "valSelect"],
	},
]

function getYear() {
    const getValue = document.getElementById("years").value;
    var s = document.getElementById("resultYear");
    document.getElementById("resultYear").innerHTML = "Rok: " + getValue


    //return getValue;
}

function getValuesByYear() {
	// console.log(dataByYears)
    const getValue = document.getElementById("years").value;
    let result = dataByYears.filter( function (el) {
		return el.year == getValue;
	});
	 console.log(result);

	 let getOnlyVisible = result[0].layers.filter(function (visibleFeature) {
		return visibleFeature.featureVisibility == true;
	});
	console.log(getOnlyVisible);
	createSelectElement(getOnlyVisible);

	//  document.getElementById("polozkyToShow").innerHTML = result.filter (function (el) {
	// 	return el.layers.opacity == 1.0;
	//  });


	// var getOnlyVisible = result.layers.filter(function (visibleFeature) {
	// 	return visibleFeature.featureVisibility == true;
	// });

	// console.log(getOnlyVisible);
}

function createSelectElement(getObject) {	
	var parent = document.getElementById("createSelect");
	parent.innerHTML = "";
	var select = document.createElement("select"),
	option,
	i = 0,
	il = getObject.length;

	for(; i < il; i++) {
		option = document.createElement("option");
		option.setAttribute("value", getObject[i].infoLayer);
		option.appendChild(document.createTextNode(getObject[i].layerID));
		select.appendChild(option);
	}

	parent.appendChild(select);
	

}





