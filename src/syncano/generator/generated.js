// DO NOT EDIT!
// This file was generated as part of build process.
// Any changes made to this file WILL be discarded
// during next build.
  
/**
 * Create permissions config
 * @param {object} config - config js object
 * @param {string} key - your REST_FRAMEWORK_KEY
 */
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


/**
 * List models in database
 * @param {string} model - name of class to get list
 */
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


/**
 * Update object in database
 * @param {string} model - name of class to create object from
 * @param {object} data - Data for object update,
 * @param {integer} id - id of object
 */
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


/**
 * Remove object from database
 * @param {array} cascadeModel - array of objects
 * @param {string} model - name of class to remove object from
 * @param {integer} id - id of object
 */
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


/**
 * Add object to database
 * @param {string} model - name of class to create object from
 * @param {object} data - Data for object create,
 */
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


/**
 * Installs superuser into backend
 */
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


/**
 * Get rest api configuration
 * @param {string} key - your REST_FRAMEWORK_KEY
 */
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


/**
 * Get models schema
 * @param {string} key - your REST_FRAMEWORK_KEY
 */
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


/**
 * Checks if user is admin
 */
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


/**
 * 
 * @param {string} username - Username
 * @param {string} password - User password
 */
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


/**
 * 
 * @param {string} username - User name
 * @param {string} password - User password
 */
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


/**
 * 
 * @param {string} username - username
 * @param {string} token - User token
 */
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


/**
 * Refresh logged in user token
 */
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


/**
 * access
 */
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


/**
 * Create new transaction
 * @param {integer} lastId - Id of your last transaction
 * @param {integer} pool - Id of your pool
 */
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


/**
 * Creates a transaction pool
 * @param {string} name - Name of your pool
 */
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


/**
 * Search trello
 * @param {string} query - query
 */
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


/**
 * Install whole objects table to your rest-framework/database
 * @param {array} fields - array of field names
 * @param {array} transform - array of field transforms
 * @param {string} header - Name of the header for authorization in your link
 * @param {string} token - Token needed for authorization in your link
 * @param {string} link - public link to another rest object service
 * @param {string} key - your REST_FRAMEWORK_KEY
 * @param {string} model - name of class to remove object from
 */
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


/**
 * clear
 */
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


/**
 * Calculates the result
 * @param {file} csvFile - The CSV file containing the transaction history for Foreign Exchange currency trades.
 */
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


/**
 * Hello world!
 * @param {string} lastname - Last name of the person you want to greet
 * @param {string} firstname - First name of the person you want to greet
 */
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


/**
 * Send mail using mailgun
 * @param {string} to - to
 * @param {string} subject - from
 * @param {string} from - from
 * @param {string} text - text email content
 */
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


/**
 * Hello world!
 * @param {string} lastname - Last name of the person you want to greet
 * @param {string} firstname - First name of the person you want to greet
 */
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


/**
 * Endpoint for getting distance between two locations ( in meters )
 * @param {string} origin - Starting location
 * @param {string} destination - Finish location
 * @param {string} mode - Mode
 */
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


/**
 * Endpoint for places api
 * @param {integer} radius - Radius to specify when location is specified( in meters )
 * @param {string} location - Location in correct google format
 * @param {string} keyword - Location you are looking for
 */
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


/**
 * Endpoint for geocoding api returns address from location
 * @param {string} location - Location
 */
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


/**
 * Endpoint for directions api
 * @param {string} origin - Starting location
 * @param {string} destination - Finish location
 * @param {string} mode - Mode
 */
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


/**
 * Endpoint for places api
 * @param {object} params - Extra parameters acceptable by google places api
 * @param {string} keyword - Location you are looking for
 */
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


/**
 * Endpoint for getting time to travel between two locations ( in meters )
 * @param {string} origin - Starting location
 * @param {string} destination - Finish location
 * @param {string} mode - Mode
 */
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


/**
 * Endpoint for geocoding api
 * @param {integer} radius - Radius to specify when location is specified( in meters )
 * @param {string} location - Location around which to search in correct google format( if no address is specified perform reverse geocoding)
 * @param {string} address - Address you are looking for
 */
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


/**
 * access
 * @param {string} filter - filter results before giving response
 * @param {string} query - determine the query
 */
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


/**
 * Delete campaign by id
 * @param {string} campaignId - campaignId
 */
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


/**
 * Delete campaign by id
 * @param {string} filter - determine which campaigns to delete
 * @param {string} query - determine which campaigns to delete
 * @param {integer} limit - limit optional depending on your rate limit in twitter developer access
 */
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


/**
 * stats
 * @param {string} filter - filter results before giving response
 * @param {string} query - determine the query
 */
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


/**
 * Get all campaigns insights in timeframe
 * @param {string} filter - filter results before giving response
 * @param {string} query - determine the query
 * @param {string} metric - metric as specified in twitter ads api
 * @param {string} end - end
 * @param {string} start - start
 */
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


/**
 * change bids for line items
 * @param {integer} bid - bid
 * @param {array} lineItems - lineItems
 */
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


/**
 * Change logged in user password
 * @param {string} newPassword - newPassword
 */
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


