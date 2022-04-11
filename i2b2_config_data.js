{
	urlProxy: "index.php",
	urlFramework: "js-i2b2/",
	startZoomed: true,
	//-------------------------------------------------------------------------------------------
	// THESE ARE ALL THE DOMAINS A USER CAN LOGIN TO
	lstDomains: [
          
               {
                       name: "NextGen BMI",
                       domain: "i2b2demo",
                       urlCellPM: "http://127.0.0.1/i2b2/services/PMService/",
                       allowAnalysis: true,
                       registrationMethod: "saml",
                       loginType: "federated",
                       adminOnly: false,
                       showRegistration: true,
                       debug: true
               }
	]
	//-------------------------------------------------------------------------------------------
}
