# .EnrichmentApi

All URIs are relative to *https://kagi.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enrichSearch**](EnrichmentApi.md#enrichSearch) | **GET** /enrich/{type} | Get enriched search results


# **enrichSearch**
> EnrichSearch200Response enrichSearch()


### Example


```typescript
import { createConfiguration, EnrichmentApi } from '';
import type { EnrichmentApiEnrichSearchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EnrichmentApi(configuration);

const request: EnrichmentApiEnrichSearchRequest = {
    // Query to enrich
  q: "steve jobs",
    // Enrich a search query with results pulled from Kagi indexes.
  type: "web",
};

const data = await apiInstance.enrichSearch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**string**] | Query to enrich | defaults to undefined
 **type** | [**&#39;news&#39; | &#39;web&#39;**]**Array<&#39;news&#39; &#124; &#39;web&#39;>** | Enrich a search query with results pulled from Kagi indexes. | defaults to 'web'


### Return type

**EnrichSearch200Response**

### Authorization

[kagi](README.md#kagi)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Access token is missing or invalid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


