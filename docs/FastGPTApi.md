# .FastGPTApi

All URIs are relative to *https://kagi.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fastGPT**](FastGPTApi.md#fastGPT) | **POST** /fastgpt | Answer a query.


# **fastGPT**
> FastGPT200Response fastGPT(fastGPTRequest)

FastGPT is a Kagi service using powerful LLMs to answer user queries running a full search engine underneath. Think ChatGPT, but on steroids and faster! You can try the web app here.

### Example


```typescript
import { createConfiguration, FastGPTApi } from '';
import type { FastGPTApiFastGPTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FastGPTApi(configuration);

const request: FastGPTApiFastGPTRequest = {
    // Contains the query to process.
  fastGPTRequest: {
    query: "query_example",
    cache: true,
  },
};

const data = await apiInstance.fastGPT(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fastGPTRequest** | **FastGPTRequest**| Contains the query to process. |


### Return type

**FastGPT200Response**

### Authorization

[kagi](README.md#kagi)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Access token is missing or invalid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


