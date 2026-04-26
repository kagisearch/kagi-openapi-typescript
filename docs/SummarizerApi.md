# .SummarizerApi

All URIs are relative to *https://kagi.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**summarizeText**](SummarizerApi.md#summarizeText) | **POST** /summarize | Upload text to summarize.
[**summarizeURL**](SummarizerApi.md#summarizeURL) | **GET** /summarize | Get a summary for a URL


# **summarizeText**
> Summary summarizeText(uploadText)


### Example


```typescript
import { createConfiguration, SummarizerApi } from '';
import type { SummarizerApiSummarizeTextRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SummarizerApi(configuration);

const request: SummarizerApiSummarizeTextRequest = {
    // Text to summarize
  uploadText: {
    text: "text_example",
  },
    // Different summarization engines are provided that will give you choices over the \"flavor\" of the summarization text. (optional)
  engine: "cecil",
    // Different summary types are provided that control the structure of the summary output. (optional)
  summaryType: "summary",
    // The summarizer can translate the output into a desired language, using the table of supported language codes below.  If no language is specified, the document\'s original language is allowed to influence the summarizer\'s output. Specifying a language will add an explicit translation step, to translate the summary to the desired language.  For example, if a document is mostly written in Spanish, the summary output may itself be in Spanish or contain Spanish passages. Specifying \"EN\" will ensure all passages are translated as English.  (optional)
  targetLanguage: "BG",
    // Whether to allow cached requests & responses. (optional)
  cache: true,
};

const data = await apiInstance.summarizeText(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadText** | **UploadText**| Text to summarize |
 **engine** | [**&#39;cecil&#39; | &#39;agnes&#39; | &#39;daphne&#39; | &#39;muriel&#39;**]**Array<&#39;cecil&#39; &#124; &#39;agnes&#39; &#124; &#39;daphne&#39; &#124; &#39;muriel&#39;>** | Different summarization engines are provided that will give you choices over the \&quot;flavor\&quot; of the summarization text. | (optional) defaults to 'cecil'
 **summaryType** | [**&#39;summary&#39; | &#39;takeaway&#39;**]**Array<&#39;summary&#39; &#124; &#39;takeaway&#39;>** | Different summary types are provided that control the structure of the summary output. | (optional) defaults to 'summary'
 **targetLanguage** | [**&#39;BG&#39; | &#39;CS&#39; | &#39;DA&#39; | &#39;DE&#39; | &#39;EL&#39; | &#39;EN&#39; | &#39;ES&#39; | &#39;ET&#39; | &#39;FI&#39; | &#39;FR&#39; | &#39;HU&#39; | &#39;ID&#39; | &#39;IT&#39; | &#39;JA&#39; | &#39;KO&#39; | &#39;LT&#39; | &#39;LV&#39; | &#39;NB&#39; | &#39;NL&#39; | &#39;PL&#39; | &#39;PT&#39; | &#39;RO&#39; | &#39;RU&#39; | &#39;SK&#39; | &#39;SL&#39; | &#39;SV&#39; | &#39;TR&#39; | &#39;UK&#39; | &#39;ZH&#39; | &#39;ZH-HANT&#39;**]**Array<&#39;BG&#39; &#124; &#39;CS&#39; &#124; &#39;DA&#39; &#124; &#39;DE&#39; &#124; &#39;EL&#39; &#124; &#39;EN&#39; &#124; &#39;ES&#39; &#124; &#39;ET&#39; &#124; &#39;FI&#39; &#124; &#39;FR&#39; &#124; &#39;HU&#39; &#124; &#39;ID&#39; &#124; &#39;IT&#39; &#124; &#39;JA&#39; &#124; &#39;KO&#39; &#124; &#39;LT&#39; &#124; &#39;LV&#39; &#124; &#39;NB&#39; &#124; &#39;NL&#39; &#124; &#39;PL&#39; &#124; &#39;PT&#39; &#124; &#39;RO&#39; &#124; &#39;RU&#39; &#124; &#39;SK&#39; &#124; &#39;SL&#39; &#124; &#39;SV&#39; &#124; &#39;TR&#39; &#124; &#39;UK&#39; &#124; &#39;ZH&#39; &#124; &#39;ZH-HANT&#39;>** | The summarizer can translate the output into a desired language, using the table of supported language codes below.  If no language is specified, the document\&#39;s original language is allowed to influence the summarizer\&#39;s output. Specifying a language will add an explicit translation step, to translate the summary to the desired language.  For example, if a document is mostly written in Spanish, the summary output may itself be in Spanish or contain Spanish passages. Specifying \&quot;EN\&quot; will ensure all passages are translated as English.  | (optional) defaults to undefined
 **cache** | [**boolean**] | Whether to allow cached requests &amp; responses. | (optional) defaults to true


### Return type

**Summary**

### Authorization

[kagi](README.md#kagi)

### HTTP request headers

 - **Content-Type**: application/json, x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**401** | Access token is missing or invalid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **summarizeURL**
> Summary summarizeURL()


### Example


```typescript
import { createConfiguration, SummarizerApi } from '';
import type { SummarizerApiSummarizeURLRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SummarizerApi(configuration);

const request: SummarizerApiSummarizeURLRequest = {
    // A URL to a document to summarize.
  url: "url_example",
    // Different summarization engines are provided that will give you choices over the \"flavor\" of the summarization text. (optional)
  engine: "cecil",
    // Different summary types are provided that control the structure of the summary output. (optional)
  summaryType: "summary",
    // The summarizer can translate the output into a desired language, using the table of supported language codes below.  If no language is specified, the document\'s original language is allowed to influence the summarizer\'s output. Specifying a language will add an explicit translation step, to translate the summary to the desired language.  For example, if a document is mostly written in Spanish, the summary output may itself be in Spanish or contain Spanish passages. Specifying \"EN\" will ensure all passages are translated as English.  (optional)
  targetLanguage: "BG",
    // Whether to allow cached requests & responses. (optional)
  cache: true,
};

const data = await apiInstance.summarizeURL(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | [**string**] | A URL to a document to summarize. | defaults to undefined
 **engine** | [**&#39;cecil&#39; | &#39;agnes&#39; | &#39;daphne&#39; | &#39;muriel&#39;**]**Array<&#39;cecil&#39; &#124; &#39;agnes&#39; &#124; &#39;daphne&#39; &#124; &#39;muriel&#39;>** | Different summarization engines are provided that will give you choices over the \&quot;flavor\&quot; of the summarization text. | (optional) defaults to 'cecil'
 **summaryType** | [**&#39;summary&#39; | &#39;takeaway&#39;**]**Array<&#39;summary&#39; &#124; &#39;takeaway&#39;>** | Different summary types are provided that control the structure of the summary output. | (optional) defaults to 'summary'
 **targetLanguage** | [**&#39;BG&#39; | &#39;CS&#39; | &#39;DA&#39; | &#39;DE&#39; | &#39;EL&#39; | &#39;EN&#39; | &#39;ES&#39; | &#39;ET&#39; | &#39;FI&#39; | &#39;FR&#39; | &#39;HU&#39; | &#39;ID&#39; | &#39;IT&#39; | &#39;JA&#39; | &#39;KO&#39; | &#39;LT&#39; | &#39;LV&#39; | &#39;NB&#39; | &#39;NL&#39; | &#39;PL&#39; | &#39;PT&#39; | &#39;RO&#39; | &#39;RU&#39; | &#39;SK&#39; | &#39;SL&#39; | &#39;SV&#39; | &#39;TR&#39; | &#39;UK&#39; | &#39;ZH&#39; | &#39;ZH-HANT&#39;**]**Array<&#39;BG&#39; &#124; &#39;CS&#39; &#124; &#39;DA&#39; &#124; &#39;DE&#39; &#124; &#39;EL&#39; &#124; &#39;EN&#39; &#124; &#39;ES&#39; &#124; &#39;ET&#39; &#124; &#39;FI&#39; &#124; &#39;FR&#39; &#124; &#39;HU&#39; &#124; &#39;ID&#39; &#124; &#39;IT&#39; &#124; &#39;JA&#39; &#124; &#39;KO&#39; &#124; &#39;LT&#39; &#124; &#39;LV&#39; &#124; &#39;NB&#39; &#124; &#39;NL&#39; &#124; &#39;PL&#39; &#124; &#39;PT&#39; &#124; &#39;RO&#39; &#124; &#39;RU&#39; &#124; &#39;SK&#39; &#124; &#39;SL&#39; &#124; &#39;SV&#39; &#124; &#39;TR&#39; &#124; &#39;UK&#39; &#124; &#39;ZH&#39; &#124; &#39;ZH-HANT&#39;>** | The summarizer can translate the output into a desired language, using the table of supported language codes below.  If no language is specified, the document\&#39;s original language is allowed to influence the summarizer\&#39;s output. Specifying a language will add an explicit translation step, to translate the summary to the desired language.  For example, if a document is mostly written in Spanish, the summary output may itself be in Spanish or contain Spanish passages. Specifying \&quot;EN\&quot; will ensure all passages are translated as English.  | (optional) defaults to undefined
 **cache** | [**boolean**] | Whether to allow cached requests &amp; responses. | (optional) defaults to true


### Return type

**Summary**

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


