// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '06adb0b3-baaa-4e5f-9df6-ca770f7902cd';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://api-dogfood.resources.windows-int.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205?api-version=2016-04-02', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestProfile4205\",\"id\":\"/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '404',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '823aec8f-b327-4e9d-b8e3-a38cef42bf2e',
  'x-ms-client-request-id': 'b7e3e3ac-d29d-4ef9-a7a7-62838e594b1c',
  'azure-asyncoperation': 'https://api-dogfood.resources.windows-int.net/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/operationresults/e65195d3-6828-416a-9920-187b000412c0?api-version=2016-04-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1164',
  'x-ms-correlation-request-id': '16b1bbee-ba35-4d88-a39a-5abc78e16e66',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230744Z:16b1bbee-ba35-4d88-a39a-5abc78e16e66',
  date: 'Mon, 25 Apr 2016 23:07:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://api-dogfood.resources.windows-int.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205?api-version=2016-04-02', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestProfile4205\",\"id\":\"/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '404',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '823aec8f-b327-4e9d-b8e3-a38cef42bf2e',
  'x-ms-client-request-id': 'b7e3e3ac-d29d-4ef9-a7a7-62838e594b1c',
  'azure-asyncoperation': 'https://api-dogfood.resources.windows-int.net/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/operationresults/e65195d3-6828-416a-9920-187b000412c0?api-version=2016-04-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1164',
  'x-ms-correlation-request-id': '16b1bbee-ba35-4d88-a39a-5abc78e16e66',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230744Z:16b1bbee-ba35-4d88-a39a-5abc78e16e66',
  date: 'Mon, 25 Apr 2016 23:07:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/operationresults/e65195d3-6828-416a-9920-187b000412c0?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'eba86d1e-7d87-44cf-98ac-02e53420ce0f',
  'x-ms-client-request-id': 'cfc44ccd-0f3b-4607-8497-69ec846bacc6',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14855',
  'x-ms-correlation-request-id': 'a0720f57-b843-4591-9f37-2565482e89ed',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230815Z:a0720f57-b843-4591-9f37-2565482e89ed',
  date: 'Mon, 25 Apr 2016 23:08:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/operationresults/e65195d3-6828-416a-9920-187b000412c0?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'eba86d1e-7d87-44cf-98ac-02e53420ce0f',
  'x-ms-client-request-id': 'cfc44ccd-0f3b-4607-8497-69ec846bacc6',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14855',
  'x-ms-correlation-request-id': 'a0720f57-b843-4591-9f37-2565482e89ed',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230815Z:a0720f57-b843-4591-9f37-2565482e89ed',
  date: 'Mon, 25 Apr 2016 23:08:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205?api-version=2016-04-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile4205\",\"id\":\"/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '403',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'adb5f527-3c4f-4134-9d23-607e6b2dc387',
  'x-ms-client-request-id': '93b0b8b4-54a3-41ec-8546-569eacc00e16',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14854',
  'x-ms-correlation-request-id': '144961b5-7b01-4ffb-a82d-604e4c758365',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230816Z:144961b5-7b01-4ffb-a82d-604e4c758365',
  date: 'Mon, 25 Apr 2016 23:08:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205?api-version=2016-04-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile4205\",\"id\":\"/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '403',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'adb5f527-3c4f-4134-9d23-607e6b2dc387',
  'x-ms-client-request-id': '93b0b8b4-54a3-41ec-8546-569eacc00e16',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14854',
  'x-ms-correlation-request-id': '144961b5-7b01-4ffb-a82d-604e4c758365',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230816Z:144961b5-7b01-4ffb-a82d-604e4c758365',
  date: 'Mon, 25 Apr 2016 23:08:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://api-dogfood.resources.windows-int.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205/endpoints/cdnTestEndpoint4770?api-version=2016-04-02', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestEndpoint4770\",\"id\":\"/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205/endpoints/cdnTestEndpoint4770\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint4770.azureedge-test.net\",\"originHostHeader\":null,\"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '812',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'ef5b18c8-f877-41f6-8fc4-6a05ef477d22',
  'x-ms-client-request-id': '70a55f57-afad-4bd0-975e-359353ae72b9',
  'azure-asyncoperation': 'https://api-dogfood.resources.windows-int.net/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/operationresults/132ff61e-5c82-43e7-97f1-2f0bf32b4bfa?api-version=2016-04-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1163',
  'x-ms-correlation-request-id': 'b0bd1834-c600-4053-bc18-1792a4df625d',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230819Z:b0bd1834-c600-4053-bc18-1792a4df625d',
  date: 'Mon, 25 Apr 2016 23:08:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://api-dogfood.resources.windows-int.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205/endpoints/cdnTestEndpoint4770?api-version=2016-04-02', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestEndpoint4770\",\"id\":\"/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205/endpoints/cdnTestEndpoint4770\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint4770.azureedge-test.net\",\"originHostHeader\":null,\"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '812',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'ef5b18c8-f877-41f6-8fc4-6a05ef477d22',
  'x-ms-client-request-id': '70a55f57-afad-4bd0-975e-359353ae72b9',
  'azure-asyncoperation': 'https://api-dogfood.resources.windows-int.net/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/operationresults/132ff61e-5c82-43e7-97f1-2f0bf32b4bfa?api-version=2016-04-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1163',
  'x-ms-correlation-request-id': 'b0bd1834-c600-4053-bc18-1792a4df625d',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230819Z:b0bd1834-c600-4053-bc18-1792a4df625d',
  date: 'Mon, 25 Apr 2016 23:08:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/operationresults/132ff61e-5c82-43e7-97f1-2f0bf32b4bfa?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '649ba19d-f677-4a61-a9f3-86357239994b',
  'x-ms-client-request-id': '9eefd7b5-c3ba-4086-9a00-740b04e03b1a',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14851',
  'x-ms-correlation-request-id': '9297b3ee-0183-4b98-8b31-1f0265502ee2',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230850Z:9297b3ee-0183-4b98-8b31-1f0265502ee2',
  date: 'Mon, 25 Apr 2016 23:08:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/operationresults/132ff61e-5c82-43e7-97f1-2f0bf32b4bfa?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '649ba19d-f677-4a61-a9f3-86357239994b',
  'x-ms-client-request-id': '9eefd7b5-c3ba-4086-9a00-740b04e03b1a',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14851',
  'x-ms-correlation-request-id': '9297b3ee-0183-4b98-8b31-1f0265502ee2',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230850Z:9297b3ee-0183-4b98-8b31-1f0265502ee2',
  date: 'Mon, 25 Apr 2016 23:08:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205/endpoints/cdnTestEndpoint4770?api-version=2016-04-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestEndpoint4770\",\"id\":\"/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205/endpoints/cdnTestEndpoint4770\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint4770.azureedge-test.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '812',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'aba18dca-f09e-42a7-af09-d698d4a92f6c',
  'x-ms-client-request-id': '83349546-bdcc-48ae-8dc9-c4bcf218341d',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14850',
  'x-ms-correlation-request-id': '832ddff4-b2d9-4c83-a08c-c5501c105d0d',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230851Z:832ddff4-b2d9-4c83-a08c-c5501c105d0d',
  date: 'Mon, 25 Apr 2016 23:08:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205/endpoints/cdnTestEndpoint4770?api-version=2016-04-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestEndpoint4770\",\"id\":\"/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205/endpoints/cdnTestEndpoint4770\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint4770.azureedge-test.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '812',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'aba18dca-f09e-42a7-af09-d698d4a92f6c',
  'x-ms-client-request-id': '83349546-bdcc-48ae-8dc9-c4bcf218341d',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14850',
  'x-ms-correlation-request-id': '832ddff4-b2d9-4c83-a08c-c5501c105d0d',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230851Z:832ddff4-b2d9-4c83-a08c-c5501c105d0d',
  date: 'Mon, 25 Apr 2016 23:08:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205/endpoints/cdnTestEndpoint4770/origins?api-version=2016-04-02')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"newname\",\"id\":\"/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205/endpoints/cdnTestEndpoint4770/origins/newname\",\"type\":\"Microsoft.Cdn/profiles/endpoints/origins\",\"properties\":{\r\n        \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '457',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'ed898b13-e10d-49ec-bdb7-19a2fa062bbb',
  'x-ms-client-request-id': '8b466566-1372-4f62-810b-de9712bb1c68',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14849',
  'x-ms-correlation-request-id': '2298be19-8c09-49a5-ac51-90c8366eafdd',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230851Z:2298be19-8c09-49a5-ac51-90c8366eafdd',
  date: 'Mon, 25 Apr 2016 23:08:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205/endpoints/cdnTestEndpoint4770/origins?api-version=2016-04-02')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"newname\",\"id\":\"/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup3866/providers/Microsoft.Cdn/profiles/cdnTestProfile4205/endpoints/cdnTestEndpoint4770/origins/newname\",\"type\":\"Microsoft.Cdn/profiles/endpoints/origins\",\"properties\":{\r\n        \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '457',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'ed898b13-e10d-49ec-bdb7-19a2fa062bbb',
  'x-ms-client-request-id': '8b466566-1372-4f62-810b-de9712bb1c68',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14849',
  'x-ms-correlation-request-id': '2298be19-8c09-49a5-ac51-90c8366eafdd',
  'x-ms-routing-request-id': 'CENTRALUS:20160425T230851Z:2298be19-8c09-49a5-ac51-90c8366eafdd',
  date: 'Mon, 25 Apr 2016 23:08:51 GMT',
  connection: 'close' });
 return result; }]];