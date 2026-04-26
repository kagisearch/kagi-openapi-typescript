// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import  FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ExampleError } from '../models/ExampleError';
import { Translate200Response } from '../models/Translate200Response';
import { Translate400Response } from '../models/Translate400Response';
import { Translate500Response } from '../models/Translate500Response';
import { TranslateAlternatives200Response } from '../models/TranslateAlternatives200Response';
import { TranslateAlternatives401Response } from '../models/TranslateAlternatives401Response';
import { TranslateAlternatives402Response } from '../models/TranslateAlternatives402Response';
import { TranslateAlternatives500Response } from '../models/TranslateAlternatives500Response';
import { TranslateDetect200Response } from '../models/TranslateDetect200Response';
import { TranslateDetect400Response } from '../models/TranslateDetect400Response';
import { TranslateDetectRequest } from '../models/TranslateDetectRequest';
import { TranslateDictionary200Response } from '../models/TranslateDictionary200Response';
import { TranslateDictionary400Response } from '../models/TranslateDictionary400Response';
import { TranslateDictionary500Response } from '../models/TranslateDictionary500Response';
import { TranslateDictionaryRequest } from '../models/TranslateDictionaryRequest';
import { TranslateListLanguages200ResponseInner } from '../models/TranslateListLanguages200ResponseInner';
import { TranslateRequest } from '../models/TranslateRequest';
import { TranslateRomanize200Response } from '../models/TranslateRomanize200Response';
import { TranslateWordInsights200Response } from '../models/TranslateWordInsights200Response';
import { TranslateWordInsights400Response } from '../models/TranslateWordInsights400Response';
import { TranslateWordInsights500Response } from '../models/TranslateWordInsights500Response';

/**
 * no description
 */
export class TranslateApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Translates text between languages with customizable options for gender, formality, and style. Supports both single text translation and efficient batch translation of multiple text snippets with context awareness.
     * Text Translation
     * @param translateRequest 
     */
    public async translate(translateRequest: TranslateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'translateRequest' is not null or undefined
        if (translateRequest === null || translateRequest === undefined) {
            throw new RequiredError("TranslateApi", "translate", "translateRequest");
        }


        // Path Params
        const localVarPath = '/api/translate';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(translateRequest, "TranslateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["kagi-translate"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Provides alternative translation options for a given text with explanations. Supports two modes: standard mode (alternatives for a full translation) and partial mode (alternative ways to phrase a specific part of a translation).
     * Alternative Translations
     * @param originalText Original text to translate. In partial mode, this serves as context for the phrase (may be ignored if not relevant).
     * @param existingTranslation In standard mode: existing full translation of the original text. In partial mode: the specific phrase you want alternative ways to express.
     * @param targetLang Target language code (ISO-639) for the translations
     * @param sourceLang Source language code (ISO-639) of the original text. Helps provide more accurate alternatives by understanding language-specific nuances.
     * @param targetExplanationLanguage Language code (ISO-639) for the explanations
     * @param translationOptions JSON string with translation customization options: - &#x60;formality&#x60;: Controls formality level [\\\&quot;default\\\&quot;, \\\&quot;more\\\&quot;, \\\&quot;less\\\&quot;] - &#x60;speaker_gender&#x60;: Gender of the speaker [\\\&quot;unknown\\\&quot;, \\\&quot;feminine\\\&quot;, \\\&quot;masculine\\\&quot;, \\\&quot;neutral\\\&quot;] - &#x60;addressee_gender&#x60;: Gender of the person being addressed [\\\&quot;unknown\\\&quot;, \\\&quot;feminine\\\&quot;, \\\&quot;masculine\\\&quot;, \\\&quot;neutral\\\&quot;] - &#x60;style&#x60;: Translation style [\\\&quot;natural\\\&quot;, \\\&quot;literal\\\&quot;] - &#x60;context&#x60;: Additional context to inform translation (string) 
     * @param partialTranslation Mode switch: \\\&#39;false\\\&#39; for standard mode (full translation alternatives), \\\&#39;true\\\&#39; for partial mode (alternative ways to phrase a specific part)
     */
    public async translateAlternatives(originalText: string, existingTranslation: string, targetLang: string, sourceLang?: string, targetExplanationLanguage?: string, translationOptions?: string, partialTranslation?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'originalText' is not null or undefined
        if (originalText === null || originalText === undefined) {
            throw new RequiredError("TranslateApi", "translateAlternatives", "originalText");
        }


        // verify required parameter 'existingTranslation' is not null or undefined
        if (existingTranslation === null || existingTranslation === undefined) {
            throw new RequiredError("TranslateApi", "translateAlternatives", "existingTranslation");
        }


        // verify required parameter 'targetLang' is not null or undefined
        if (targetLang === null || targetLang === undefined) {
            throw new RequiredError("TranslateApi", "translateAlternatives", "targetLang");
        }






        // Path Params
        const localVarPath = '/alternative-translations';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (originalText !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('original_text', originalText as any);
        }
        if (existingTranslation !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('existing_translation', existingTranslation as any);
        }
        if (sourceLang !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('source_lang', sourceLang as any);
        }
        if (targetLang !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('target_lang', targetLang as any);
        }
        if (targetExplanationLanguage !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('target_explanation_language', targetExplanationLanguage as any);
        }
        if (translationOptions !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('translation_options', translationOptions as any);
        }
        if (partialTranslation !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('partial_translation', partialTranslation as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["kagi-translate"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Detects the language of the provided text.
     * Language Detection
     * @param translateDetectRequest 
     */
    public async translateDetect(translateDetectRequest: TranslateDetectRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'translateDetectRequest' is not null or undefined
        if (translateDetectRequest === null || translateDetectRequest === undefined) {
            throw new RequiredError("TranslateApi", "translateDetect", "translateDetectRequest");
        }


        // Path Params
        const localVarPath = '/api/detect';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(translateDetectRequest, "TranslateDetectRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["kagi-translate"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Provides dictionary definitions for words in different languages.  **Translation behavior:** - Fields translated to `definition_language`: definition, notes, etymology, part_of_speech, usage_level, dialect - Fields that remain in `word_language`: word, synonyms, pronunciation, plural, related_words, examples (with translations in parentheses when languages differ) - Fields always in English (strict enums): gender (\"masculine\", \"feminine\", \"neuter\", \"common\"), temporal_trend (\"increasing\", \"stable\", \"decreasing\") 
     * Dictionary
     * @param translateDictionaryRequest 
     */
    public async translateDictionary(translateDictionaryRequest: TranslateDictionaryRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'translateDictionaryRequest' is not null or undefined
        if (translateDictionaryRequest === null || translateDictionaryRequest === undefined) {
            throw new RequiredError("TranslateApi", "translateDictionary", "translateDictionaryRequest");
        }


        // Path Params
        const localVarPath = '/api/dictionary';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(translateDictionaryRequest, "TranslateDictionaryRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["kagi-translate"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns a list of languages supported by the translation API.  The response includes language codes, names, and whether each language supports formality settings. 
     * List Supported Languages
     * @param type Type of languages to return (\&#39;source\&#39; or \&#39;target\&#39;)
     * @param locale Locale code to use for language names (e.g., \&#39;en\&#39;, \&#39;de\&#39;, \&#39;fr\&#39;)
     */
    public async translateListLanguages(type?: 'source' | 'target', locale?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/api/list-languages';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "'source' | 'target'", ""));
        }

        // Query Params
        if (locale !== undefined) {
            requestContext.setQueryParam("locale", ObjectSerializer.serialize(locale, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["kagi-translate"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Converts non-Latin script text to Latin script (romanization/transliteration). Uses standardized romanization styles for each language: Hepburn for Japanese, Pinyin for Chinese, ALA-LC for Arabic, etc.
     * Text Romanization
     * @param text Text to romanize
     * @param language Language code (ISO-639) of the source text
     */
    public async translateRomanize(text: string, language: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'text' is not null or undefined
        if (text === null || text === undefined) {
            throw new RequiredError("TranslateApi", "translateRomanize", "text");
        }


        // verify required parameter 'language' is not null or undefined
        if (language === null || language === undefined) {
            throw new RequiredError("TranslateApi", "translateRomanize", "language");
        }


        // Path Params
        const localVarPath = '/api/romanize';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (text !== undefined) {
            requestContext.setQueryParam("text", ObjectSerializer.serialize(text, "string", ""));
        }

        // Query Params
        if (language !== undefined) {
            requestContext.setQueryParam("language", ObjectSerializer.serialize(language, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["kagi-translate"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Provides detailed linguistic insights and alternatives for translated text. The API identifies 3-5 key words or phrases in the translated text that have meaningful alternative expressions, and returns:  1. A marked version of the translation with insight markers 2. Alternative expressions for each identified word/phrase 3. Brief explanations for each alternative in the target explanation language 4. Type labels categorizing each insight (e.g., \"Lexical choice\", \"Cultural reference\") 
     * Word Insights
     * @param originalText Source text that was translated
     * @param translatedText Translated text to analyze for linguistic insights
     * @param targetExplanationLanguage Language code (ISO-639) for the explanations and type labels
     * @param translationOptions Optional JSON string with translation options that provide context for the insights. Can include formality, gender preferences, and style. 
     */
    public async translateWordInsights(originalText: string, translatedText: string, targetExplanationLanguage?: string, translationOptions?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'originalText' is not null or undefined
        if (originalText === null || originalText === undefined) {
            throw new RequiredError("TranslateApi", "translateWordInsights", "originalText");
        }


        // verify required parameter 'translatedText' is not null or undefined
        if (translatedText === null || translatedText === undefined) {
            throw new RequiredError("TranslateApi", "translateWordInsights", "translatedText");
        }




        // Path Params
        const localVarPath = '/api/word-insights';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (originalText !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('original_text', originalText as any);
        }
        if (translatedText !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('translated_text', translatedText as any);
        }
        if (targetExplanationLanguage !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('target_explanation_language', targetExplanationLanguage as any);
        }
        if (translationOptions !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('translation_options', translationOptions as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["kagi-translate"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class TranslateApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to translate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async translateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Translate200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Translate200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Translate200Response", ""
            ) as Translate200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Translate400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Translate400Response", ""
            ) as Translate400Response;
            throw new ApiException<Translate400Response>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Translate500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Translate500Response", ""
            ) as Translate500Response;
            throw new ApiException<Translate500Response>(response.httpStatusCode, "Server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Translate200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Translate200Response", ""
            ) as Translate200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to translateAlternatives
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async translateAlternativesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TranslateAlternatives200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TranslateAlternatives200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TranslateAlternatives200Response", ""
            ) as TranslateAlternatives200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: TranslateAlternatives401Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TranslateAlternatives401Response", ""
            ) as TranslateAlternatives401Response;
            throw new ApiException<TranslateAlternatives401Response>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("402", response.httpStatusCode)) {
            const body: TranslateAlternatives402Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TranslateAlternatives402Response", ""
            ) as TranslateAlternatives402Response;
            throw new ApiException<TranslateAlternatives402Response>(response.httpStatusCode, "Payment Required", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: TranslateAlternatives500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TranslateAlternatives500Response", ""
            ) as TranslateAlternatives500Response;
            throw new ApiException<TranslateAlternatives500Response>(response.httpStatusCode, "Server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TranslateAlternatives200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TranslateAlternatives200Response", ""
            ) as TranslateAlternatives200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to translateDetect
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async translateDetectWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TranslateDetect200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TranslateDetect200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TranslateDetect200Response", ""
            ) as TranslateDetect200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: TranslateDetect400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TranslateDetect400Response", ""
            ) as TranslateDetect400Response;
            throw new ApiException<TranslateDetect400Response>(response.httpStatusCode, "Bad request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TranslateDetect200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TranslateDetect200Response", ""
            ) as TranslateDetect200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to translateDictionary
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async translateDictionaryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TranslateDictionary200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TranslateDictionary200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TranslateDictionary200Response", ""
            ) as TranslateDictionary200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: TranslateDictionary400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TranslateDictionary400Response", ""
            ) as TranslateDictionary400Response;
            throw new ApiException<TranslateDictionary400Response>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: TranslateDictionary500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TranslateDictionary500Response", ""
            ) as TranslateDictionary500Response;
            throw new ApiException<TranslateDictionary500Response>(response.httpStatusCode, "Server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TranslateDictionary200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TranslateDictionary200Response", ""
            ) as TranslateDictionary200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to translateListLanguages
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async translateListLanguagesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<TranslateListLanguages200ResponseInner> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<TranslateListLanguages200ResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TranslateListLanguages200ResponseInner>", ""
            ) as Array<TranslateListLanguages200ResponseInner>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ExampleError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExampleError", ""
            ) as ExampleError;
            throw new ApiException<ExampleError>(response.httpStatusCode, "Access token is missing or invalid", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<TranslateListLanguages200ResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TranslateListLanguages200ResponseInner>", ""
            ) as Array<TranslateListLanguages200ResponseInner>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to translateRomanize
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async translateRomanizeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TranslateRomanize200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TranslateRomanize200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TranslateRomanize200Response", ""
            ) as TranslateRomanize200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: TranslateDetect400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TranslateDetect400Response", ""
            ) as TranslateDetect400Response;
            throw new ApiException<TranslateDetect400Response>(response.httpStatusCode, "Bad request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TranslateRomanize200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TranslateRomanize200Response", ""
            ) as TranslateRomanize200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to translateWordInsights
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async translateWordInsightsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TranslateWordInsights200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TranslateWordInsights200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TranslateWordInsights200Response", ""
            ) as TranslateWordInsights200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: TranslateWordInsights400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TranslateWordInsights400Response", ""
            ) as TranslateWordInsights400Response;
            throw new ApiException<TranslateWordInsights400Response>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: TranslateAlternatives401Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TranslateAlternatives401Response", ""
            ) as TranslateAlternatives401Response;
            throw new ApiException<TranslateAlternatives401Response>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("402", response.httpStatusCode)) {
            const body: TranslateAlternatives402Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TranslateAlternatives402Response", ""
            ) as TranslateAlternatives402Response;
            throw new ApiException<TranslateAlternatives402Response>(response.httpStatusCode, "Payment Required", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: TranslateWordInsights500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TranslateWordInsights500Response", ""
            ) as TranslateWordInsights500Response;
            throw new ApiException<TranslateWordInsights500Response>(response.httpStatusCode, "Server error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TranslateWordInsights200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TranslateWordInsights200Response", ""
            ) as TranslateWordInsights200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
