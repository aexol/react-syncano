export const allsockets = {
    "prev": null,
    "objects": [
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "rest-framework/configure",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/rest-framework/configure/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/rest-framework/configure/traces/"
            },
            "metadata": {
                "description": "Create permissions config",
                "parameters": {
                    "config": {
                        "type": "object",
                        "description": "config js object",
                        "example": "{\n  models: [\"book\",\"credentials\",\"author\",\"page\"],\n  logged_in: [\n    {\n      model: \"book\",\n      type: \"cud\"\n    },\n    {\n      model: \"credentials\",\n      type: \"rcud\"\n    },\n    {\n      model: \"author\",\n      type: \"c\"\n    }\n  ],\n  object_level: [\n    {\n      model: \"author\",\n      type: \"ud\",\n      owner_field: \"user\"\n    }\n  ]\n}\n"
                    },
                    "key": {
                        "type": "string",
                        "description": "your REST_FRAMEWORK_KEY",
                        "example": "13-31sd1je1je9jqw9j891r8wp89rh8p"
                    }
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "rest-framework/list",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/rest-framework/list/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/rest-framework/list/traces/"
            },
            "metadata": {
                "description": "List models in database",
                "parameters": {
                    "model": {
                        "required": true,
                        "type": "string",
                        "description": "name of class to get list",
                        "example": "strings"
                    }
                },
                "response": {
                    "mimetype": "text/plain",
                    "examples": [
                        {
                            "example": "[\n  {\n    id: 1,\n    name: 'first_item'\n  },\n  {\n    id: 2,\n    name: 'second_item'\n  }\n]\n",
                            "exit_code": 200,
                            "description": "Success"
                        },
                        {
                            "example": "You don't have permission",
                            "exit_code": 403,
                            "description": "Unauthorized"
                        }
                    ]
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "rest-framework/update",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/rest-framework/update/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/rest-framework/update/traces/"
            },
            "metadata": {
                "description": "Update object in database",
                "parameters": {
                    "model": {
                        "required": true,
                        "type": "string",
                        "description": "name of class to create object from",
                        "example": "strings"
                    },
                    "data": {
                        "required": false,
                        "type": "object",
                        "description": "Data for object update,",
                        "example": "{\n  name: \"new text\",\n  some_file_field: {\n      type: \"file\",\n      value: \"https://d3rij3t703q5l6.cloudfront.net/31061/9/ddy12tbv16d168vv618rd1v.png\"\n    }\n}\n"
                    },
                    "id": {
                        "required": true,
                        "type": "integer",
                        "description": "id of object",
                        "example": 13
                    }
                },
                "response": {
                    "mimetype": "text/plain",
                    "examples": [
                        {
                            "example": "{\n  id: 1,\n  name: 'new text'\n}\n",
                            "exit_code": 200,
                            "description": "Success"
                        },
                        {
                            "example": "You don't have permission",
                            "exit_code": 403,
                            "description": "Unauthorized"
                        }
                    ]
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "rest-framework/remove",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/rest-framework/remove/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/rest-framework/remove/traces/"
            },
            "metadata": {
                "description": "Remove object from database",
                "parameters": {
                    "cascadeModel": {
                        "type": "array",
                        "description": "array of objects",
                        "example": "[\n  {\n    model: \"author\",\n    field: \"book\"\n  }\n]\n"
                    },
                    "model": {
                        "required": true,
                        "type": "string",
                        "description": "name of class to remove object from",
                        "example": "strings"
                    },
                    "id": {
                        "required": true,
                        "type": "integer",
                        "description": "id of object",
                        "example": 13
                    }
                },
                "response": {
                    "mimetype": "text/plain",
                    "examples": [
                        {
                            "example": "{\n  id: 1,\n  name: 'object_name'\n}\n",
                            "exit_code": 200,
                            "description": "Success"
                        },
                        {
                            "example": "You don't have permission",
                            "exit_code": 403,
                            "description": "Unauthorized"
                        }
                    ]
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "rest-framework/add",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/rest-framework/add/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/rest-framework/add/traces/"
            },
            "metadata": {
                "description": "Add object to database",
                "parameters": {
                    "model": {
                        "required": true,
                        "type": "string",
                        "description": "name of class to create object from",
                        "example": "strings"
                    },
                    "data": {
                        "required": false,
                        "type": "object",
                        "description": "Data for object create,",
                        "example": "{\n  name:\"blabla123\",\n  some_file_field:{\n    type:\"file\",\n    value:\"data:image/gif;base64,R0lGODlhAQABAAAAACw=\"\n  }\n}\n"
                    }
                },
                "response": {
                    "mimetype": "text/plain",
                    "examples": [
                        {
                            "example": "{\n  id: 1,\n  name: 'blabla123',\n  some_file_field: {\n    type: \"file\",\n    value: \"https://d3rij3t703q5l6.cloudfront.net/31061/9/ddy12tbv16d168vv618rd1v.png\"\n  }\n}\n",
                            "exit_code": 200,
                            "description": "Success"
                        },
                        {
                            "example": "You don't have permission",
                            "exit_code": 403,
                            "description": "Unauthorized"
                        }
                    ]
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "rest-framework/install",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/rest-framework/install/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/rest-framework/install/traces/"
            },
            "metadata": {
                "description": "Installs superuser into backend"
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "rest-framework/getconfig",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/rest-framework/getconfig/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/rest-framework/getconfig/traces/"
            },
            "metadata": {
                "description": "Get rest api configuration",
                "parameters": {
                    "key": {
                        "type": "string",
                        "description": "your REST_FRAMEWORK_KEY",
                        "example": "13-31sd1je1je9jqw9j891r8wp89rh8p"
                    }
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "rest-framework/schema",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/rest-framework/schema/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/rest-framework/schema/traces/"
            },
            "metadata": {
                "description": "Get models schema",
                "parameters": {
                    "key": {
                        "type": "string",
                        "description": "your REST_FRAMEWORK_KEY",
                        "example": "13-31sd1je1je9jqw9j891r8wp89rh8p"
                    }
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "rest-framework/isadmin",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/rest-framework/isadmin/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/rest-framework/isadmin/traces/"
            },
            "metadata": {
                "description": "Checks if user is admin"
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "rest-auth/login",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/rest-auth/login/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/rest-auth/login/traces/"
            },
            "metadata": {
                "response": {
                    "mimetype": "application/json",
                    "examples": [
                        {
                            "example": "{\n  token: \"cb21ff98ac8c7dda8fcd0129b0adb0254dea5c8e\",\n  username: \"u\"\n}\n",
                            "exit_code": 200,
                            "description": "Success"
                        },
                        {
                            "example": "{}\n",
                            "exit_code": 400,
                            "description": "Failed"
                        }
                    ]
                },
                "parameters": {
                    "username": {
                        "type": "string",
                        "description": "Username",
                        "example": "joe"
                    },
                    "password": {
                        "type": "string",
                        "description": "User password",
                        "example": "super-sercret-password"
                    }
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "rest-auth/register",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/rest-auth/register/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/rest-auth/register/traces/"
            },
            "metadata": {
                "response": {
                    "mimetype": "application/json",
                    "examples": [
                        {
                            "example": "{\n  token: \"cb21ff98ac8c7dda8fcd0129b0adb0254dea5c8e\",\n  username: \"u\"\n}\n",
                            "exit_code": 200,
                            "description": "Success"
                        },
                        {
                            "example": "{}\n",
                            "exit_code": 400,
                            "description": "Failed"
                        }
                    ]
                },
                "parameters": {
                    "username": {
                        "type": "string",
                        "description": "User name",
                        "example": "joe"
                    },
                    "password": {
                        "type": "string",
                        "description": "User password",
                        "example": "super-sercret-password"
                    }
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "rest-auth/validate",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/rest-auth/validate/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/rest-auth/validate/traces/"
            },
            "metadata": {
                "response": {
                    "mimetype": "application/json",
                    "examples": [
                        {
                            "example": "{\n  valid: true\n}\n",
                            "exit_code": 200,
                            "description": "Success"
                        },
                        {
                            "example": "{\n  valid: false\n}\n",
                            "exit_code": 400,
                            "description": "Failed"
                        }
                    ]
                },
                "parameters": {
                    "username": {
                        "type": "string",
                        "description": "username",
                        "example": "john"
                    },
                    "token": {
                        "type": "string",
                        "description": "User token",
                        "example": "cb21ff98ac8c7dda8fcd0129b0adb0254dea5c8e"
                    }
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "rest-auth/refresh",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/rest-auth/refresh/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/rest-auth/refresh/traces/"
            },
            "metadata": {
                "description": "Refresh logged in user token",
                "response": {
                    "mimetype": "application/json",
                    "examples": [
                        {
                            "example": "{\n  token: \"cb21ff98ac8c7dda8fcd0129b0adb0254dea5c8e\",\n  username: \"john\"\n}\n",
                            "exit_code": 200,
                            "description": "Success"
                        },
                        {
                            "example": "{\n  valid: false\n}\n",
                            "exit_code": 400,
                            "description": "Failed"
                        }
                    ]
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "twitter-ads/access",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/twitter-ads/access/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/twitter-ads/access/traces/"
            },
            "metadata": {
                "description": "access"
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "sync-state/sync",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/sync-state/sync/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/sync-state/sync/traces/"
            },
            "metadata": {
                "description": "Create new transaction",
                "parameters": {
                    "lastId": {
                        "type": "integer",
                        "description": "Id of your last transaction",
                        "example": 14
                    },
                    "pool": {
                        "type": "integer",
                        "description": "Id of your pool",
                        "example": 1
                    }
                },
                "response": {
                    "success": {
                        "description": "Creates new transaction",
                        "parameters": {
                            "message": {
                                "type": "string",
                                "description": "Message",
                                "example": "Created transaction"
                            },
                            "transaction": {
                                "type": "object",
                                "description": "Created transaction",
                                "example": "{\n  \"id\": 3,\n  \"pool\": 2\n}\n"
                            }
                        }
                    }
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "sync-state/create_pool",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/sync-state/create_pool/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/sync-state/create_pool/traces/"
            },
            "metadata": {
                "description": "Creates a transaction pool",
                "parameters": {
                    "name": {
                        "type": "string",
                        "description": "Name of your pool",
                        "example": "tickets"
                    }
                },
                "response": {
                    "success": {
                        "description": "Pool creation succeded",
                        "parameters": {
                            "pool": {
                                "type": "object",
                                "description": "Transaction pool",
                                "example": "{\n  \"id\": 1,\n  \"name\": \"tickets\"\n}\n"
                            }
                        }
                    },
                    "error": {
                        "status": 400,
                        "description": "Pool creation failed"
                    }
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "trello/search",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/trello/search/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/trello/search/traces/"
            },
            "metadata": {
                "description": "Search trello",
                "parameters": {
                    "query": {
                        "type": "string",
                        "description": "query",
                        "example": "board:ju23h|label:new etc..."
                    }
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "migrate/migrate",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/migrate/migrate/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/migrate/migrate/traces/"
            },
            "metadata": {
                "description": "Install whole objects table to your rest-framework/database",
                "parameters": {
                    "fields": {
                        "required": true,
                        "type": "array",
                        "description": "array of field names",
                        "example": [
                            "name",
                            "title",
                            "author"
                        ]
                    },
                    "transform": {
                        "required": false,
                        "type": "array",
                        "description": "array of field transforms",
                        "example": "[\n  {\n    \"from\":\"name\",\n    \"to\":\"surname\"\n  }\n]\n"
                    },
                    "header": {
                        "required": false,
                        "type": "string",
                        "description": "Name of the header for authorization in your link",
                        "example": "Authorization:"
                    },
                    "token": {
                        "required": false,
                        "type": "string",
                        "description": "Token needed for authorization in your link",
                        "example": "dadsa17623t61374y1hsauij"
                    },
                    "link": {
                        "required": true,
                        "type": "string",
                        "description": "public link to another rest object service",
                        "example": "http://restservice.com/mymodel/objects/"
                    },
                    "key": {
                        "required": true,
                        "type": "string",
                        "description": "your REST_FRAMEWORK_KEY",
                        "example": "231431dsaojdsaiur47813t"
                    },
                    "model": {
                        "required": true,
                        "type": "string",
                        "description": "name of class to remove object from",
                        "example": "strings"
                    }
                },
                "response": {
                    "mimetype": "application/json",
                    "done": {
                        "description": "Migration is done",
                        "parameters": {
                            "status": {
                                "type": "string",
                                "description": "Migration of model ended",
                                "example": "end"
                            }
                        }
                    },
                    "success": {
                        "description": "Success",
                        "parameters": {
                            "status": {
                                "type": "array",
                                "description": "Status of migration",
                                "example": "migrating"
                            },
                            "progress": {
                                "type": "string",
                                "description": "Progress of migration",
                                "example": "1/100"
                            }
                        }
                    },
                    "error": {
                        "description": "Error",
                        "parameters": {
                            "message": {
                                "type": "string",
                                "description": "error message",
                                "example": "Incorrect lin"
                            }
                        },
                        "exit_code": 400
                    }
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "monetor/clear",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/monetor/clear/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/monetor/clear/traces/"
            },
            "metadata": {
                "description": "clear"
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "monetor/calculate",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/monetor/calculate/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/monetor/calculate/traces/"
            },
            "metadata": {
                "description": "Calculates the result",
                "parameters": {
                    "csv-file": {
                        "example": "e-Markets Nexus - Trade Overview 20-06-2017 -  Transaction History for Nordea PSD2 endpoint.xlsx",
                        "type": "file",
                        "description": "The CSV file containing the transaction history for Foreign Exchange currency trades.",
                        "long_description": "The csv provided must at a minimum contain the following columns\nTrade date\nBought currency\nBought amount original\nSold currency\nSpot rate\"\n"
                    }
                },
                "response": {
                    "fail": {
                        "description": "Failed",
                        "parameters": {
                            "message": {
                                "type": "string",
                                "description": "Message",
                                "example": "Could not calculate"
                            }
                        },
                        "exit_code": 400
                    },
                    "success": {
                        "description": "Success",
                        "parameters": {
                            "long_description": "Integer holding the aggregated difference between the currency exchanged in the Spot Rate column in the CSV file, compared to the corresponding Forex currency rate given by the forex-historical-database, expressed in the buying currency.\"\n",
                            "type": "string",
                            "description": "Message",
                            "example": "323870"
                        },
                        "exit_code": 200
                    }
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "simple/hello",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/simple/hello/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/simple/hello/traces/"
            },
            "metadata": {
                "description": "Hello world!",
                "parameters": {
                    "lastname": {
                        "type": "string",
                        "description": "Last name of the person you want to greet",
                        "example": "Durden"
                    },
                    "firstname": {
                        "type": "string",
                        "description": "First name of the person you want to greet",
                        "example": "Tyler"
                    }
                },
                "response": {
                    "mimetype": "application/json",
                    "examples": [
                        {
                            "example": "{\n\"message\": \"Hello Tyler Durden!\"\n}\n",
                            "exit_code": 200,
                            "description": "Success"
                        },
                        {
                            "example": "{\n  \"message\": \"Hello Tyler Durden!\"\n}\n",
                            "exit_code": 400,
                            "description": "Failed"
                        }
                    ]
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "mail/mailgun",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/mail/mailgun/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/mail/mailgun/traces/"
            },
            "metadata": {
                "description": "Send mail using mailgun",
                "parameters": {
                    "to": {
                        "type": "string",
                        "description": "to",
                        "example": "example@mail.com"
                    },
                    "subject": {
                        "type": "string",
                        "description": "from",
                        "example": "Hello my friend"
                    },
                    "from": {
                        "type": "string",
                        "description": "from",
                        "example": "example@mail.com"
                    },
                    "text": {
                        "type": "string",
                        "description": "text email content",
                        "example": "hello"
                    }
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "onesignal/hello",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/onesignal/hello/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/onesignal/hello/traces/"
            },
            "metadata": {
                "description": "Hello world!",
                "parameters": {
                    "lastname": {
                        "type": "string",
                        "description": "Last name of the person you want to greet",
                        "example": "Durden"
                    },
                    "firstname": {
                        "type": "string",
                        "description": "First name of the person you want to greet",
                        "example": "Tyler"
                    }
                },
                "response": {
                    "mimetype": "application/json",
                    "examples": [
                        {
                            "example": "{\n\"message\": \"Hello Tyler Durden!\"\n}\n",
                            "exit_code": 200,
                            "description": "Success"
                        },
                        {
                            "example": "{\n  \"message\": \"Hello Tyler Durden!\"\n}\n",
                            "exit_code": 400,
                            "description": "Failed"
                        }
                    ]
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "google-maps/distance",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/google-maps/distance/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/google-maps/distance/traces/"
            },
            "metadata": {
                "description": "Endpoint for getting distance between two locations ( in meters )",
                "parameters": {
                    "origin": {
                        "type": "string",
                        "description": "Starting location",
                        "example": "33.8670522,151.1957362 or Brooklyn 77( lat,lng ) or string"
                    },
                    "destination": {
                        "type": "string",
                        "description": "Finish location",
                        "example": "33.8670522,151.1957362 or Brooklyn 77( lat,lng ) or string"
                    },
                    "mode": {
                        "type": "string",
                        "description": "Mode",
                        "example": "default:driving|walking|bicycling|transit"
                    }
                },
                "response": {
                    "mimetype": "application/json",
                    "success": {
                        "description": "Success",
                        "parameters": {
                            "text": {
                                "type": "string",
                                "description": "value in km",
                                "example": "4.8km"
                            },
                            "value": {
                                "type": "integer",
                                "description": "Value in meters",
                                "example": 4795
                            }
                        }
                    },
                    "error": {
                        "description": "Error",
                        "parameters": {
                            "message": {
                                "type": "string",
                                "description": "error message",
                                "example": "Incorrect API key!"
                            }
                        },
                        "exit_code": 400
                    }
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "google-maps/places",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/google-maps/places/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/google-maps/places/traces/"
            },
            "metadata": {
                "description": "Endpoint for places api",
                "parameters": {
                    "radius": {
                        "type": "integer",
                        "description": "Radius to specify when location is specified( in meters )",
                        "example": 500
                    },
                    "location": {
                        "type": "string",
                        "description": "Location in correct google format",
                        "example": "33.8670522,151.1957362"
                    },
                    "keyword": {
                        "type": "string",
                        "description": "Location you are looking for",
                        "example": "Joes pizza"
                    }
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "google-maps/address",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/google-maps/address/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/google-maps/address/traces/"
            },
            "metadata": {
                "description": "Endpoint for geocoding api returns address from location",
                "parameters": {
                    "location": {
                        "type": "string",
                        "description": "Location",
                        "example": "33.8670522,151.1957362"
                    }
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "google-maps/directions",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/google-maps/directions/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/google-maps/directions/traces/"
            },
            "metadata": {
                "description": "Endpoint for directions api",
                "parameters": {
                    "origin": {
                        "type": "string",
                        "description": "Starting location",
                        "example": "33.8670522,151.1957362 or Brooklyn 77( lat,lng ) or string"
                    },
                    "destination": {
                        "type": "string",
                        "description": "Finish location",
                        "example": "33.8670522,151.1957362 or Brooklyn 77( lat,lng ) or string"
                    },
                    "mode": {
                        "type": "string",
                        "description": "Mode",
                        "example": "driving|walking|bicycling|transit"
                    }
                },
                "response": {
                    "mimetype": "application/json",
                    "success": {
                        "description": "Success",
                        "parameters": {
                            "routes": {
                                "type": "array",
                                "description": "array of routes",
                                "example": []
                            },
                            "status": {
                                "type": "integer",
                                "description": "status of response",
                                "example": 200
                            },
                            "geocoded_waypoints": {
                                "type": "array",
                                "description": "array of geocoded waypoints",
                                "example": []
                            }
                        }
                    },
                    "error": {
                        "description": "Error",
                        "parameters": {
                            "message": {
                                "type": "string",
                                "description": "error message",
                                "example": "Incorrect API key!"
                            }
                        },
                        "exit_code": 400
                    }
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "google-maps/suggest",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/google-maps/suggest/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/google-maps/suggest/traces/"
            },
            "metadata": {
                "description": "Endpoint for places api",
                "parameters": {
                    "params": {
                        "type": "object",
                        "description": "Extra parameters acceptable by google places api",
                        "example": "{\n  \"language\":\"de\"\n}\n"
                    },
                    "keyword": {
                        "type": "string",
                        "description": "Location you are looking for",
                        "example": "Joes pizza"
                    }
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "google-maps/time",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/google-maps/time/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/google-maps/time/traces/"
            },
            "metadata": {
                "description": "Endpoint for getting time to travel between two locations ( in meters )",
                "parameters": {
                    "origin": {
                        "type": "string",
                        "description": "Starting location",
                        "example": "33.8670522,151.1957362 or Brooklyn 77( lat,lng ) or string"
                    },
                    "destination": {
                        "type": "string",
                        "description": "Finish location",
                        "example": "33.8670522,151.1957362 or Brooklyn 77( lat,lng ) or string"
                    },
                    "mode": {
                        "type": "string",
                        "description": "Mode",
                        "example": "default:driving|walking|bicycling|transit"
                    }
                },
                "response": {
                    "mimetype": "application/json",
                    "success": {
                        "description": "Success",
                        "parameters": {
                            "text": {
                                "type": "string",
                                "description": "value in minutes",
                                "example": "10 mins"
                            },
                            "value": {
                                "type": "integer",
                                "description": "Value in seconds",
                                "example": 605
                            }
                        }
                    },
                    "error": {
                        "description": "Error",
                        "parameters": {
                            "message": {
                                "type": "string",
                                "description": "error message",
                                "example": "Incorrect API key!"
                            }
                        },
                        "exit_code": 400
                    }
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "google-maps/geocoding",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/google-maps/geocoding/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/google-maps/geocoding/traces/"
            },
            "metadata": {
                "description": "Endpoint for geocoding api",
                "parameters": {
                    "radius": {
                        "type": "integer",
                        "description": "Radius to specify when location is specified( in meters )",
                        "example": 500
                    },
                    "location": {
                        "type": "string",
                        "description": "Location around which to search in correct google format( if no address is specified perform reverse geocoding)",
                        "example": "33.8670522,151.1957362"
                    },
                    "address": {
                        "type": "string",
                        "description": "Address you are looking for",
                        "example": "Brooklyn 34"
                    }
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "twitter-ads/account",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/twitter-ads/account/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/twitter-ads/account/traces/"
            },
            "metadata": {
                "description": "access",
                "parameters": {
                    "filter": {
                        "type": "string",
                        "description": "filter results before giving response"
                    },
                    "query": {
                        "type": "string",
                        "description": "determine the query"
                    }
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "twitter-ads/campaigndelete",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/twitter-ads/campaigndelete/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/twitter-ads/campaigndelete/traces/"
            },
            "metadata": {
                "description": "Delete campaign by id",
                "parameters": {
                    "campaignId": {
                        "type": "string",
                        "description": "campaignId",
                        "example": "campaignId"
                    }
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "twitter-ads/campaigndeletewithquery",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/twitter-ads/campaigndeletewithquery/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/twitter-ads/campaigndeletewithquery/traces/"
            },
            "metadata": {
                "description": "Delete campaign by id",
                "parameters": {
                    "filter": {
                        "type": "string",
                        "description": "determine which campaigns to delete"
                    },
                    "query": {
                        "type": "string",
                        "description": "determine which campaigns to delete"
                    },
                    "limit": {
                        "type": "integer",
                        "description": "limit optional depending on your rate limit in twitter developer access",
                        "example": 5
                    }
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "twitter-ads/stats",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/twitter-ads/stats/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/twitter-ads/stats/traces/"
            },
            "metadata": {
                "description": "stats",
                "parameters": {
                    "filter": {
                        "type": "string",
                        "description": "filter results before giving response"
                    },
                    "query": {
                        "type": "string",
                        "description": "determine the query"
                    }
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "twitter-ads/campaigninsights",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/twitter-ads/campaigninsights/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/twitter-ads/campaigninsights/traces/"
            },
            "metadata": {
                "description": "Get all campaigns insights in timeframe",
                "parameters": {
                    "filter": {
                        "type": "string",
                        "description": "filter results before giving response"
                    },
                    "query": {
                        "type": "string",
                        "description": "determine the query"
                    },
                    "metric": {
                        "type": "string",
                        "description": "metric as specified in twitter ads api",
                        "example": "metric"
                    },
                    "end": {
                        "type": "string",
                        "description": "end",
                        "example": "end"
                    },
                    "start": {
                        "type": "string",
                        "description": "start",
                        "example": "start"
                    }
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "twitter-ads/changebids",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/twitter-ads/changebids/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/twitter-ads/changebids/traces/"
            },
            "metadata": {
                "description": "change bids for line items",
                "parameters": {
                    "bid": {
                        "type": "integer",
                        "description": "bid",
                        "example": 33
                    },
                    "lineItems": {
                        "type": "array",
                        "description": "lineItems",
                        "example": "lineItems"
                    }
                }
            }
        },
        {
            "acl": {},
            "allowed_methods": [
                "POST",
                "PUT",
                "PATCH",
                "GET",
                "DELETE"
            ],
            "name": "rest-auth/changepassword",
            "links": {
                "self": "/v2/instances/socket-development/endpoints/sockets/rest-auth/changepassword/",
                "traces": "/v2/instances/socket-development/endpoints/sockets/rest-auth/changepassword/traces/"
            },
            "metadata": {
                "description": "Change logged in user password",
                "parameters": {
                    "newPassword": {
                        "type": "string",
                        "description": "newPassword",
                        "example": "newPassword"
                    }
                }
            }
        }
    ],
    "next": null
}