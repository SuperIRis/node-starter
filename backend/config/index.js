var config = {
	all:{

	},
	local:{
		mode:'local',
		baseURL:'http://localhost',
		port:8000,
		mongo:{
			host:"127.0.0.1",
			port:"27017"
		},
		twitter:{			
		}
	},
	production:{
		mode:'production',
		baseURL:'',
		port:82,
		mongo:{
			host:"127.0.0.1",
			port:"27017"
		},
		twitter:{
			
			
		}
		
	}
};
for(var a in config.all){
	if(!config.local[a]){
		config.local[a] = config.all[a];
	}
	if(!config.production[a]){
		config.production[a] = config.all[a];
	}
}

module.exports = function(mode){
	return config[mode || process.argv[2] || 'production'] || config.production;
}
