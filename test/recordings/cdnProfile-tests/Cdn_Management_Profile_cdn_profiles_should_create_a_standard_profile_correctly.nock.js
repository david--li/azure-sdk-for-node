// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '06adb0b3-baaa-4e5f-9df6-ca770f7902cd';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://api-dogfood.resources.windows-int.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup414/providers/Microsoft.Cdn/profiles/cdnTestProfile2286?api-version=2016-04-02', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestProfile2286\",\"id\":\"/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup414/providers/Microsoft.Cdn/profiles/cdnTestProfile2286\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '403',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'a09d0bb8-ae94-42a2-83a5-eb2c56aec408',
  'x-ms-client-request-id': '19c50bb9-6fb1-413b-9efe-09e83ccaec82',
  'azure-asyncoperation': 'https://api-dogfood.resources.windows-int.net/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup414/providers/Microsoft.Cdn/operationresults/39b1445c-7fd4-431d-8340-2db4912491b6?api-version=2016-04-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '3d5b2b8d-f4e0-4ddb-8b83-b6f2f1e5140b',
  'x-ms-routing-request-id': 'CENTRALUS:20160427T184817Z:3d5b2b8d-f4e0-4ddb-8b83-b6f2f1e5140b',
  date: 'Wed, 27 Apr 2016 18:48:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://api-dogfood.resources.windows-int.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup414/providers/Microsoft.Cdn/profiles/cdnTestProfile2286?api-version=2016-04-02', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestProfile2286\",\"id\":\"/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup414/providers/Microsoft.Cdn/profiles/cdnTestProfile2286\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '403',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'a09d0bb8-ae94-42a2-83a5-eb2c56aec408',
  'x-ms-client-request-id': '19c50bb9-6fb1-413b-9efe-09e83ccaec82',
  'azure-asyncoperation': 'https://api-dogfood.resources.windows-int.net/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup414/providers/Microsoft.Cdn/operationresults/39b1445c-7fd4-431d-8340-2db4912491b6?api-version=2016-04-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '3d5b2b8d-f4e0-4ddb-8b83-b6f2f1e5140b',
  'x-ms-routing-request-id': 'CENTRALUS:20160427T184817Z:3d5b2b8d-f4e0-4ddb-8b83-b6f2f1e5140b',
  date: 'Wed, 27 Apr 2016 18:48:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup414/providers/Microsoft.Cdn/operationresults/39b1445c-7fd4-431d-8340-2db4912491b6?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '76d61865-98e7-4bc8-a25d-e3f8abd85ee8',
  'x-ms-client-request-id': '53b79933-7182-4019-a9e4-4f0f2d495628',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14817',
  'x-ms-correlation-request-id': '1bdccfc0-9da0-4cf4-8457-8b9cc7de0b2a',
  'x-ms-routing-request-id': 'CENTRALUS:20160427T184848Z:1bdccfc0-9da0-4cf4-8457-8b9cc7de0b2a',
  date: 'Wed, 27 Apr 2016 18:48:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup414/providers/Microsoft.Cdn/operationresults/39b1445c-7fd4-431d-8340-2db4912491b6?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '76d61865-98e7-4bc8-a25d-e3f8abd85ee8',
  'x-ms-client-request-id': '53b79933-7182-4019-a9e4-4f0f2d495628',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14817',
  'x-ms-correlation-request-id': '1bdccfc0-9da0-4cf4-8457-8b9cc7de0b2a',
  'x-ms-routing-request-id': 'CENTRALUS:20160427T184848Z:1bdccfc0-9da0-4cf4-8457-8b9cc7de0b2a',
  date: 'Wed, 27 Apr 2016 18:48:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup414/providers/Microsoft.Cdn/profiles/cdnTestProfile2286?api-version=2016-04-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile2286\",\"id\":\"/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup414/providers/Microsoft.Cdn/profiles/cdnTestProfile2286\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '402',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'ad27ff5e-94c2-4000-973e-13d660c14f49',
  'x-ms-client-request-id': 'd9a6aaa6-24f7-44a2-adc4-b105c1ccf156',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14816',
  'x-ms-correlation-request-id': '6c01dc52-c46b-474e-9a84-01125dd113a7',
  'x-ms-routing-request-id': 'CENTRALUS:20160427T184849Z:6c01dc52-c46b-474e-9a84-01125dd113a7',
  date: 'Wed, 27 Apr 2016 18:48:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup414/providers/Microsoft.Cdn/profiles/cdnTestProfile2286?api-version=2016-04-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile2286\",\"id\":\"/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourcegroups/cdnTestGroup414/providers/Microsoft.Cdn/profiles/cdnTestProfile2286\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '402',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'ad27ff5e-94c2-4000-973e-13d660c14f49',
  'x-ms-client-request-id': 'd9a6aaa6-24f7-44a2-adc4-b105c1ccf156',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14816',
  'x-ms-correlation-request-id': '6c01dc52-c46b-474e-9a84-01125dd113a7',
  'x-ms-routing-request-id': 'CENTRALUS:20160427T184849Z:6c01dc52-c46b-474e-9a84-01125dd113a7',
  date: 'Wed, 27 Apr 2016 18:48:49 GMT',
  connection: 'close' });
 return result; }]];