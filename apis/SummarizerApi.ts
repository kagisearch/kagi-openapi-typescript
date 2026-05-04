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


import { ErrorEnvelope } from '../models/ErrorEnvelope';
import { Summary } from '../models/Summary';
import { UploadText } from '../models/UploadText';

/**
 * no description
 */
export class SummarizerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Upload text to summarize.
     * @param uploadText Text to summarize
     * @param engine Different summarization engines are provided that will give you choices over the \&quot;flavor\&quot; of the summarization text.
     * @param summaryType Different summary types are provided that control the structure of the summary output.
     * @param targetLanguage The summarizer can translate the output into a desired language, using the table of supported language codes below.  If no language is specified, the document\&#39;s original language is allowed to influence the summarizer\&#39;s output. Specifying a language will add an explicit translation step, to translate the summary to the desired language.  For example, if a document is mostly written in Spanish, the summary output may itself be in Spanish or contain Spanish passages. Specifying \&quot;EN\&quot; will ensure all passages are translated as English. 
     * @param cache Whether to allow cached requests &amp; responses.
     */
    public async summarizeText(uploadText: UploadText, engine?: 'cecil' | 'agnes' | 'daphne' | 'muriel', summaryType?: 'summary' | 'takeaway', targetLanguage?: 'BG' | 'CS' | 'DA' | 'DE' | 'EL' | 'EN' | 'ES' | 'ET' | 'FI' | 'FR' | 'HU' | 'ID' | 'IT' | 'JA' | 'KO' | 'LT' | 'LV' | 'NB' | 'NL' | 'PL' | 'PT' | 'RO' | 'RU' | 'SK' | 'SL' | 'SV' | 'TR' | 'UK' | 'ZH' | 'ZH-HANT', cache?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'uploadText' is not null or undefined
        if (uploadText === null || uploadText === undefined) {
            throw new RequiredError("SummarizerApi", "summarizeText", "uploadText");
        }






        // Path Params
        const localVarPath = '/summarize';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (engine !== undefined) {
            requestContext.setQueryParam("engine", ObjectSerializer.serialize(engine, "'cecil' | 'agnes' | 'daphne' | 'muriel'", ""));
        }

        // Query Params
        if (summaryType !== undefined) {
            requestContext.setQueryParam("summary_type", ObjectSerializer.serialize(summaryType, "'summary' | 'takeaway'", ""));
        }

        // Query Params
        if (targetLanguage !== undefined) {
            requestContext.setQueryParam("target_language", ObjectSerializer.serialize(targetLanguage, "'BG' | 'CS' | 'DA' | 'DE' | 'EL' | 'EN' | 'ES' | 'ET' | 'FI' | 'FR' | 'HU' | 'ID' | 'IT' | 'JA' | 'KO' | 'LT' | 'LV' | 'NB' | 'NL' | 'PL' | 'PT' | 'RO' | 'RU' | 'SK' | 'SL' | 'SV' | 'TR' | 'UK' | 'ZH' | 'ZH-HANT'", ""));
        }

        // Query Params
        if (cache !== undefined) {
            requestContext.setQueryParam("cache", ObjectSerializer.serialize(cache, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "x-www-form-urlencoded"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(uploadText, "UploadText", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["kagi"]
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
     * Get a summary for a URL
     * @param url A URL to a document to summarize.
     * @param engine Different summarization engines are provided that will give you choices over the \&quot;flavor\&quot; of the summarization text.
     * @param summaryType Different summary types are provided that control the structure of the summary output.
     * @param targetLanguage The summarizer can translate the output into a desired language, using the table of supported language codes below.  If no language is specified, the document\&#39;s original language is allowed to influence the summarizer\&#39;s output. Specifying a language will add an explicit translation step, to translate the summary to the desired language.  For example, if a document is mostly written in Spanish, the summary output may itself be in Spanish or contain Spanish passages. Specifying \&quot;EN\&quot; will ensure all passages are translated as English. 
     * @param cache Whether to allow cached requests &amp; responses.
     */
    public async summarizeURL(url: string, engine?: 'cecil' | 'agnes' | 'daphne' | 'muriel', summaryType?: 'summary' | 'takeaway', targetLanguage?: 'BG' | 'CS' | 'DA' | 'DE' | 'EL' | 'EN' | 'ES' | 'ET' | 'FI' | 'FR' | 'HU' | 'ID' | 'IT' | 'JA' | 'KO' | 'LT' | 'LV' | 'NB' | 'NL' | 'PL' | 'PT' | 'RO' | 'RU' | 'SK' | 'SL' | 'SV' | 'TR' | 'UK' | 'ZH' | 'ZH-HANT', cache?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'url' is not null or undefined
        if (url === null || url === undefined) {
            throw new RequiredError("SummarizerApi", "summarizeURL", "url");
        }






        // Path Params
        const localVarPath = '/summarize';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (engine !== undefined) {
            requestContext.setQueryParam("engine", ObjectSerializer.serialize(engine, "'cecil' | 'agnes' | 'daphne' | 'muriel'", ""));
        }

        // Query Params
        if (summaryType !== undefined) {
            requestContext.setQueryParam("summary_type", ObjectSerializer.serialize(summaryType, "'summary' | 'takeaway'", ""));
        }

        // Query Params
        if (targetLanguage !== undefined) {
            requestContext.setQueryParam("target_language", ObjectSerializer.serialize(targetLanguage, "'BG' | 'CS' | 'DA' | 'DE' | 'EL' | 'EN' | 'ES' | 'ET' | 'FI' | 'FR' | 'HU' | 'ID' | 'IT' | 'JA' | 'KO' | 'LT' | 'LV' | 'NB' | 'NL' | 'PL' | 'PT' | 'RO' | 'RU' | 'SK' | 'SL' | 'SV' | 'TR' | 'UK' | 'ZH' | 'ZH-HANT'", ""));
        }

        // Query Params
        if (cache !== undefined) {
            requestContext.setQueryParam("cache", ObjectSerializer.serialize(cache, "boolean", ""));
        }

        // Query Params
        if (url !== undefined) {
            requestContext.setQueryParam("url", ObjectSerializer.serialize(url, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["kagi"]
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

export class SummarizerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to summarizeText
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async summarizeTextWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Summary >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Summary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Summary", ""
            ) as Summary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorEnvelope = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorEnvelope", ""
            ) as ErrorEnvelope;
            throw new ApiException<ErrorEnvelope>(response.httpStatusCode, "Access token is missing or invalid", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Summary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Summary", ""
            ) as Summary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to summarizeURL
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async summarizeURLWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Summary >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Summary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Summary", ""
            ) as Summary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorEnvelope = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorEnvelope", ""
            ) as ErrorEnvelope;
            throw new ApiException<ErrorEnvelope>(response.httpStatusCode, "Access token is missing or invalid", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Summary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Summary", ""
            ) as Summary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
