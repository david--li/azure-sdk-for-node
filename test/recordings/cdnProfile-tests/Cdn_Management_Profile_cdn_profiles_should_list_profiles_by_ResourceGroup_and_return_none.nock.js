// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '06adb0b3-baaa-4e5f-9df6-ca770f7902cd';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup414/providers/Microsoft.Cdn/profiles?api-version=2016-04-02')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'a78ab4d0-68ea-4118-ac47-10571bc56bff',
  'x-ms-client-request-id': '618c1679-5afb-49d0-9b87-26591885ee58',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14822',
  'x-ms-correlation-request-id': '88269490-40a9-4d42-98f8-946d69a19b7f',
  'x-ms-routing-request-id': 'CENTRALUS:20160427T184815Z:88269490-40a9-4d42-98f8-946d69a19b7f',
  date: 'Wed, 27 Apr 2016 18:48:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/06adb0b3-baaa-4e5f-9df6-ca770f7902cd/resourceGroups/cdnTestGroup414/providers/Microsoft.Cdn/profiles?api-version=2016-04-02')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'a78ab4d0-68ea-4118-ac47-10571bc56bff',
  'x-ms-client-request-id': '618c1679-5afb-49d0-9b87-26591885ee58',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14822',
  'x-ms-correlation-request-id': '88269490-40a9-4d42-98f8-946d69a19b7f',
  'x-ms-routing-request-id': 'CENTRALUS:20160427T184815Z:88269490-40a9-4d42-98f8-946d69a19b7f',
  date: 'Wed, 27 Apr 2016 18:48:14 GMT',
  connection: 'close' });
 return result; }]];