// DO NOT EDIT!
// This file was generated as part of build process.
// Any changes made to this file WILL be discarded
// during next build.
  
export const restFrameworkConfigure = ({
    config,
	key,
	success = json => json,
    error = err => err
} = {}) => {
        return ['rest-framework/configure',
        {
            'config':config,'key':key
        },
        success,
        error
    ]
}


export const restFrameworkList = ({
    model,
	success = json => json,
    error = err => err
} = {}) => {
        return ['rest-framework/list',
        {
            'model':model
        },
        success,
        error
    ]
}


export const restFrameworkUpdate = ({
    model,
	data,
	id,
	success = json => json,
    error = err => err
} = {}) => {
        return ['rest-framework/update',
        {
            'model':model,'data':data,'id':id
        },
        success,
        error
    ]
}


export const restFrameworkRemove = ({
    cascadeModel,
	model,
	id,
	success = json => json,
    error = err => err
} = {}) => {
        return ['rest-framework/remove',
        {
            'cascadeModel':cascadeModel,'model':model,'id':id
        },
        success,
        error
    ]
}


export const restFrameworkAdd = ({
    model,
	data,
	success = json => json,
    error = err => err
} = {}) => {
        return ['rest-framework/add',
        {
            'model':model,'data':data
        },
        success,
        error
    ]
}


export const restFrameworkInstall = ({
    success = json => json,
    error = err => err
} = {}) => {
        return ['rest-framework/install',
        {
            
        },
        success,
        error
    ]
}


export const restFrameworkGetconfig = ({
    key,
	success = json => json,
    error = err => err
} = {}) => {
        return ['rest-framework/getconfig',
        {
            'key':key
        },
        success,
        error
    ]
}


export const restFrameworkSchema = ({
    key,
	success = json => json,
    error = err => err
} = {}) => {
        return ['rest-framework/schema',
        {
            'key':key
        },
        success,
        error
    ]
}


export const restFrameworkIsadmin = ({
    success = json => json,
    error = err => err
} = {}) => {
        return ['rest-framework/isadmin',
        {
            
        },
        success,
        error
    ]
}


export const restAuthLogin = ({
    username,
	password,
	success = json => json,
    error = err => err
} = {}) => {
        return ['rest-auth/login',
        {
            'username':username,'password':password
        },
        success,
        error
    ]
}


export const restAuthRegister = ({
    username,
	password,
	success = json => json,
    error = err => err
} = {}) => {
        return ['rest-auth/register',
        {
            'username':username,'password':password
        },
        success,
        error
    ]
}


export const restAuthValidate = ({
    username,
	token,
	success = json => json,
    error = err => err
} = {}) => {
        return ['rest-auth/validate',
        {
            'username':username,'token':token
        },
        success,
        error
    ]
}


export const restAuthRefresh = ({
    success = json => json,
    error = err => err
} = {}) => {
        return ['rest-auth/refresh',
        {
            
        },
        success,
        error
    ]
}


export const twitterAdsAccess = ({
    success = json => json,
    error = err => err
} = {}) => {
        return ['twitter-ads/access',
        {
            
        },
        success,
        error
    ]
}


export const syncStateSync = ({
    lastId,
	pool,
	success = json => json,
    error = err => err
} = {}) => {
        return ['sync-state/sync',
        {
            'lastId':lastId,'pool':pool
        },
        success,
        error
    ]
}


export const syncStateCreatePool = ({
    name,
	success = json => json,
    error = err => err
} = {}) => {
        return ['sync-state/create_pool',
        {
            'name':name
        },
        success,
        error
    ]
}


export const trelloSearch = ({
    query,
	success = json => json,
    error = err => err
} = {}) => {
        return ['trello/search',
        {
            'query':query
        },
        success,
        error
    ]
}


export const migrateMigrate = ({
    fields,
	transform,
	header,
	token,
	link,
	key,
	model,
	success = json => json,
    error = err => err
} = {}) => {
        return ['migrate/migrate',
        {
            'fields':fields,'transform':transform,'header':header,'token':token,'link':link,'key':key,'model':model
        },
        success,
        error
    ]
}


export const monetorClear = ({
    success = json => json,
    error = err => err
} = {}) => {
        return ['monetor/clear',
        {
            
        },
        success,
        error
    ]
}


export const monetorCalculate = ({
    csvFile,
	success = json => json,
    error = err => err
} = {}) => {
        return ['monetor/calculate',
        {
            'csv-file':csvFile
        },
        success,
        error
    ]
}


export const simpleHello = ({
    lastname,
	firstname,
	success = json => json,
    error = err => err
} = {}) => {
        return ['simple/hello',
        {
            'lastname':lastname,'firstname':firstname
        },
        success,
        error
    ]
}


export const mailMailgun = ({
    to,
	subject,
	from,
	text,
	success = json => json,
    error = err => err
} = {}) => {
        return ['mail/mailgun',
        {
            'to':to,'subject':subject,'from':from,'text':text
        },
        success,
        error
    ]
}


export const onesignalHello = ({
    lastname,
	firstname,
	success = json => json,
    error = err => err
} = {}) => {
        return ['onesignal/hello',
        {
            'lastname':lastname,'firstname':firstname
        },
        success,
        error
    ]
}


export const googleMapsDistance = ({
    origin,
	destination,
	mode,
	success = json => json,
    error = err => err
} = {}) => {
        return ['google-maps/distance',
        {
            'origin':origin,'destination':destination,'mode':mode
        },
        success,
        error
    ]
}


export const googleMapsPlaces = ({
    radius,
	location,
	keyword,
	success = json => json,
    error = err => err
} = {}) => {
        return ['google-maps/places',
        {
            'radius':radius,'location':location,'keyword':keyword
        },
        success,
        error
    ]
}


export const googleMapsAddress = ({
    location,
	success = json => json,
    error = err => err
} = {}) => {
        return ['google-maps/address',
        {
            'location':location
        },
        success,
        error
    ]
}


export const googleMapsDirections = ({
    origin,
	destination,
	mode,
	success = json => json,
    error = err => err
} = {}) => {
        return ['google-maps/directions',
        {
            'origin':origin,'destination':destination,'mode':mode
        },
        success,
        error
    ]
}


export const googleMapsSuggest = ({
    params,
	keyword,
	success = json => json,
    error = err => err
} = {}) => {
        return ['google-maps/suggest',
        {
            'params':params,'keyword':keyword
        },
        success,
        error
    ]
}


export const googleMapsTime = ({
    origin,
	destination,
	mode,
	success = json => json,
    error = err => err
} = {}) => {
        return ['google-maps/time',
        {
            'origin':origin,'destination':destination,'mode':mode
        },
        success,
        error
    ]
}


export const googleMapsGeocoding = ({
    radius,
	location,
	address,
	success = json => json,
    error = err => err
} = {}) => {
        return ['google-maps/geocoding',
        {
            'radius':radius,'location':location,'address':address
        },
        success,
        error
    ]
}


export const twitterAdsAccount = ({
    filter,
	query,
	success = json => json,
    error = err => err
} = {}) => {
        return ['twitter-ads/account',
        {
            'filter':filter,'query':query
        },
        success,
        error
    ]
}


export const twitterAdsCampaigndelete = ({
    campaignId,
	success = json => json,
    error = err => err
} = {}) => {
        return ['twitter-ads/campaigndelete',
        {
            'campaignId':campaignId
        },
        success,
        error
    ]
}


export const twitterAdsCampaigndeletewithquery = ({
    filter,
	query,
	limit,
	success = json => json,
    error = err => err
} = {}) => {
        return ['twitter-ads/campaigndeletewithquery',
        {
            'filter':filter,'query':query,'limit':limit
        },
        success,
        error
    ]
}


export const twitterAdsStats = ({
    filter,
	query,
	success = json => json,
    error = err => err
} = {}) => {
        return ['twitter-ads/stats',
        {
            'filter':filter,'query':query
        },
        success,
        error
    ]
}


export const twitterAdsCampaigninsights = ({
    filter,
	query,
	metric,
	end,
	start,
	success = json => json,
    error = err => err
} = {}) => {
        return ['twitter-ads/campaigninsights',
        {
            'filter':filter,'query':query,'metric':metric,'end':end,'start':start
        },
        success,
        error
    ]
}


export const twitterAdsChangebids = ({
    bid,
	lineItems,
	success = json => json,
    error = err => err
} = {}) => {
        return ['twitter-ads/changebids',
        {
            'bid':bid,'lineItems':lineItems
        },
        success,
        error
    ]
}


export const restAuthChangepassword = ({
    newPassword,
	success = json => json,
    error = err => err
} = {}) => {
        return ['rest-auth/changepassword',
        {
            'newPassword':newPassword
        },
        success,
        error
    ]
}


