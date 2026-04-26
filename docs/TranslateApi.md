# .TranslateApi

All URIs are relative to *https://kagi.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**translate**](TranslateApi.md#translate) | **POST** /api/translate | Text Translation
[**translateAlternatives**](TranslateApi.md#translateAlternatives) | **POST** /alternative-translations | Alternative Translations
[**translateDetect**](TranslateApi.md#translateDetect) | **POST** /api/detect | Language Detection
[**translateDictionary**](TranslateApi.md#translateDictionary) | **POST** /api/dictionary | Dictionary
[**translateListLanguages**](TranslateApi.md#translateListLanguages) | **GET** /api/list-languages | List Supported Languages
[**translateRomanize**](TranslateApi.md#translateRomanize) | **GET** /api/romanize | Text Romanization
[**translateWordInsights**](TranslateApi.md#translateWordInsights) | **POST** /api/word-insights | Word Insights


# **translate**
> Translate200Response translate(translateRequest)

Translates text between languages with customizable options for gender, formality, and style. Supports both single text translation and efficient batch translation of multiple text snippets with context awareness.

### Example


```typescript
import { createConfiguration, TranslateApi } from '';
import type { TranslateApiTranslateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TranslateApi(configuration);

const request: TranslateApiTranslateRequest = {
  
  translateRequest: {
    text: null,
    sourceLang: "en",
    targetLang: "es",
    _from: "_from_example",
    to: "to_example",
    context: "This is from a medical document",
    preserveFormatting: false,
    formality: "default",
    speakerGender: "unknown",
    addresseeGender: "unknown",
    translationStyle: "natural",
    predictedLanguage: "predictedLanguage_example",
    prediction: "prediction_example",
    stream: false,
    dictionaryLanguage: "en",
  },
};

const data = await apiInstance.translate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **translateRequest** | **TranslateRequest**|  |


### Return type

**Translate200Response**

### Authorization

[kagi-translate](README.md#kagi-translate)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/event-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful translation |  -  |
**400** | Bad request |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **translateAlternatives**
> TranslateAlternatives200Response translateAlternatives()

Provides alternative translation options for a given text with explanations. Supports two modes: standard mode (alternatives for a full translation) and partial mode (alternative ways to phrase a specific part of a translation).

### Example


```typescript
import { createConfiguration, TranslateApi } from '';
import type { TranslateApiTranslateAlternativesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TranslateApi(configuration);

const request: TranslateApiTranslateAlternativesRequest = {
    // Original text to translate. In partial mode, this serves as context for the phrase (may be ignored if not relevant).
  originalText: "originalText_example",
    // In standard mode: existing full translation of the original text. In partial mode: the specific phrase you want alternative ways to express.
  existingTranslation: "existingTranslation_example",
    // Target language code (ISO-639) for the translations
  targetLang: "targetLang_example",
    // Source language code (ISO-639) of the original text. Helps provide more accurate alternatives by understanding language-specific nuances. (optional)
  sourceLang: "sourceLang_example",
    // Language code (ISO-639) for the explanations (optional)
  targetExplanationLanguage: "en",
    // JSON string with translation customization options: - `formality`: Controls formality level [\\\"default\\\", \\\"more\\\", \\\"less\\\"] - `speaker_gender`: Gender of the speaker [\\\"unknown\\\", \\\"feminine\\\", \\\"masculine\\\", \\\"neutral\\\"] - `addressee_gender`: Gender of the person being addressed [\\\"unknown\\\", \\\"feminine\\\", \\\"masculine\\\", \\\"neutral\\\"] - `style`: Translation style [\\\"natural\\\", \\\"literal\\\"] - `context`: Additional context to inform translation (string)  (optional)
  translationOptions: "{"formality":"more","speaker_gender":"feminine","style":"natural"}",
    // Mode switch: \\\'false\\\' for standard mode (full translation alternatives), \\\'true\\\' for partial mode (alternative ways to phrase a specific part) (optional)
  partialTranslation: "false",
};

const data = await apiInstance.translateAlternatives(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **originalText** | [**string**] | Original text to translate. In partial mode, this serves as context for the phrase (may be ignored if not relevant). | defaults to undefined
 **existingTranslation** | [**string**] | In standard mode: existing full translation of the original text. In partial mode: the specific phrase you want alternative ways to express. | defaults to undefined
 **targetLang** | [**string**] | Target language code (ISO-639) for the translations | defaults to undefined
 **sourceLang** | [**string**] | Source language code (ISO-639) of the original text. Helps provide more accurate alternatives by understanding language-specific nuances. | (optional) defaults to undefined
 **targetExplanationLanguage** | [**string**] | Language code (ISO-639) for the explanations | (optional) defaults to 'en'
 **translationOptions** | [**string**] | JSON string with translation customization options: - &#x60;formality&#x60;: Controls formality level [\\\&quot;default\\\&quot;, \\\&quot;more\\\&quot;, \\\&quot;less\\\&quot;] - &#x60;speaker_gender&#x60;: Gender of the speaker [\\\&quot;unknown\\\&quot;, \\\&quot;feminine\\\&quot;, \\\&quot;masculine\\\&quot;, \\\&quot;neutral\\\&quot;] - &#x60;addressee_gender&#x60;: Gender of the person being addressed [\\\&quot;unknown\\\&quot;, \\\&quot;feminine\\\&quot;, \\\&quot;masculine\\\&quot;, \\\&quot;neutral\\\&quot;] - &#x60;style&#x60;: Translation style [\\\&quot;natural\\\&quot;, \\\&quot;literal\\\&quot;] - &#x60;context&#x60;: Additional context to inform translation (string)  | (optional) defaults to undefined
 **partialTranslation** | [**string**] | Mode switch: \\\&#39;false\\\&#39; for standard mode (full translation alternatives), \\\&#39;true\\\&#39; for partial mode (alternative ways to phrase a specific part) | (optional) defaults to 'false'


### Return type

**TranslateAlternatives200Response**

### Authorization

[kagi-translate](README.md#kagi-translate)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Alternative translations with explanations |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **translateDetect**
> TranslateDetect200Response translateDetect(translateDetectRequest)

Detects the language of the provided text.

### Example


```typescript
import { createConfiguration, TranslateApi } from '';
import type { TranslateApiTranslateDetectRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TranslateApi(configuration);

const request: TranslateApiTranslateDetectRequest = {
  
  translateDetectRequest: {
    text: "text_example",
  },
};

const data = await apiInstance.translateDetect(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **translateDetectRequest** | **TranslateDetectRequest**|  |


### Return type

**TranslateDetect200Response**

### Authorization

[kagi-translate](README.md#kagi-translate)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful language detection |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **translateDictionary**
> TranslateDictionary200Response translateDictionary(translateDictionaryRequest)

Provides dictionary definitions for words in different languages.  **Translation behavior:** - Fields translated to `definition_language`: definition, notes, etymology, part_of_speech, usage_level, dialect - Fields that remain in `word_language`: word, synonyms, pronunciation, plural, related_words, examples (with translations in parentheses when languages differ) - Fields always in English (strict enums): gender (\"masculine\", \"feminine\", \"neuter\", \"common\"), temporal_trend (\"increasing\", \"stable\", \"decreasing\") 

### Example


```typescript
import { createConfiguration, TranslateApi } from '';
import type { TranslateApiTranslateDictionaryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TranslateApi(configuration);

const request: TranslateApiTranslateDictionaryRequest = {
  
  translateDictionaryRequest: {
    word: "word_example",
    wordLanguage: "en",
    definitionLanguage: "en",
    stream: false,
    nsfw: true,
    model: "claude-35-sonnet",
  },
};

const data = await apiInstance.translateDictionary(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **translateDictionaryRequest** | **TranslateDictionaryRequest**|  |


### Return type

**TranslateDictionary200Response**

### Authorization

[kagi-translate](README.md#kagi-translate)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful dictionary lookup |  -  |
**400** | Bad request |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **translateListLanguages**
> Array<TranslateListLanguages200ResponseInner> translateListLanguages()

Returns a list of languages supported by the translation API.  The response includes language codes, names, and whether each language supports formality settings. 

### Example


```typescript
import { createConfiguration, TranslateApi } from '';
import type { TranslateApiTranslateListLanguagesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TranslateApi(configuration);

const request: TranslateApiTranslateListLanguagesRequest = {
    // Type of languages to return (\'source\' or \'target\') (optional)
  type: "source",
    // Locale code to use for language names (e.g., \'en\', \'de\', \'fr\') (optional)
  locale: "locale_example",
};

const data = await apiInstance.translateListLanguages(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**&#39;source&#39; | &#39;target&#39;**]**Array<&#39;source&#39; &#124; &#39;target&#39;>** | Type of languages to return (\&#39;source\&#39; or \&#39;target\&#39;) | (optional) defaults to undefined
 **locale** | [**string**] | Locale code to use for language names (e.g., \&#39;en\&#39;, \&#39;de\&#39;, \&#39;fr\&#39;) | (optional) defaults to undefined


### Return type

**Array<TranslateListLanguages200ResponseInner>**

### Authorization

[kagi-translate](README.md#kagi-translate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of supported languages |  -  |
**401** | Access token is missing or invalid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **translateRomanize**
> TranslateRomanize200Response translateRomanize()

Converts non-Latin script text to Latin script (romanization/transliteration). Uses standardized romanization styles for each language: Hepburn for Japanese, Pinyin for Chinese, ALA-LC for Arabic, etc.

### Example


```typescript
import { createConfiguration, TranslateApi } from '';
import type { TranslateApiTranslateRomanizeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TranslateApi(configuration);

const request: TranslateApiTranslateRomanizeRequest = {
    // Text to romanize
  text: "こんにちは",
    // Language code (ISO-639) of the source text
  language: "ja",
};

const data = await apiInstance.translateRomanize(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | [**string**] | Text to romanize | defaults to undefined
 **language** | [**string**] | Language code (ISO-639) of the source text | defaults to undefined


### Return type

**TranslateRomanize200Response**

### Authorization

[kagi-translate](README.md#kagi-translate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful romanization |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **translateWordInsights**
> TranslateWordInsights200Response translateWordInsights()

Provides detailed linguistic insights and alternatives for translated text. The API identifies 3-5 key words or phrases in the translated text that have meaningful alternative expressions, and returns:  1. A marked version of the translation with insight markers 2. Alternative expressions for each identified word/phrase 3. Brief explanations for each alternative in the target explanation language 4. Type labels categorizing each insight (e.g., \"Lexical choice\", \"Cultural reference\") 

### Example


```typescript
import { createConfiguration, TranslateApi } from '';
import type { TranslateApiTranslateWordInsightsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TranslateApi(configuration);

const request: TranslateApiTranslateWordInsightsRequest = {
    // Source text that was translated
  originalText: "originalText_example",
    // Translated text to analyze for linguistic insights
  translatedText: "translatedText_example",
    // Language code (ISO-639) for the explanations and type labels (optional)
  targetExplanationLanguage: "en",
    // Optional JSON string with translation options that provide context for the insights. Can include formality, gender preferences, and style.  (optional)
  translationOptions: "translationOptions_example",
};

const data = await apiInstance.translateWordInsights(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **originalText** | [**string**] | Source text that was translated | defaults to undefined
 **translatedText** | [**string**] | Translated text to analyze for linguistic insights | defaults to undefined
 **targetExplanationLanguage** | [**string**] | Language code (ISO-639) for the explanations and type labels | (optional) defaults to 'en'
 **translationOptions** | [**string**] | Optional JSON string with translation options that provide context for the insights. Can include formality, gender preferences, and style.  | (optional) defaults to undefined


### Return type

**TranslateWordInsights200Response**

### Authorization

[kagi-translate](README.md#kagi-translate)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Detailed linguistic insights for the translated text |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


