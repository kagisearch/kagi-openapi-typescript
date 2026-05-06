import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

import { ErrorDetail } from '../models/ErrorDetail';
import { ErrorEnvelope } from '../models/ErrorEnvelope';
import { ExtractRequest } from '../models/ExtractRequest';
import { ExtractResponse } from '../models/ExtractResponse';
import { Meta } from '../models/Meta';
import { PageInput } from '../models/PageInput';
import { PageOutput } from '../models/PageOutput';
import { Search200Response } from '../models/Search200Response';
import { Search200ResponseData } from '../models/Search200ResponseData';
import { SearchRequest } from '../models/SearchRequest';
import { SearchRequestExtract } from '../models/SearchRequestExtract';
import { SearchRequestFilters } from '../models/SearchRequestFilters';
import { SearchRequestLens } from '../models/SearchRequestLens';
import { SearchRequestPersonalizations } from '../models/SearchRequestPersonalizations';
import { SearchRequestPersonalizationsDomainsInner } from '../models/SearchRequestPersonalizationsDomainsInner';
import { SearchRequestPersonalizationsRegexesInner } from '../models/SearchRequestPersonalizationsRegexesInner';
import { SearchResult } from '../models/SearchResult';
import { SearchResultImage } from '../models/SearchResultImage';

import { ObservableExtractApi } from "./ObservableAPI";
import { ExtractApiRequestFactory, ExtractApiResponseProcessor} from "../apis/ExtractApi";

export interface ExtractApiExtractContentRequest {
    /**
     * 
     * @type ExtractRequest
     * @memberof ExtractApiextractContent
     */
    extractRequest: ExtractRequest
}

export class ObjectExtractApi {
    private api: ObservableExtractApi

    public constructor(configuration: Configuration, requestFactory?: ExtractApiRequestFactory, responseProcessor?: ExtractApiResponseProcessor) {
        this.api = new ObservableExtractApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Extracts markdown content from up to 10 HTTP(s) URLs. Each URL is processed and the extracted content is returned in the response. 
     * Extract page content as markdown from URLs
     * @param param the request object
     */
    public extractContentWithHttpInfo(param: ExtractApiExtractContentRequest, options?: ConfigurationOptions): Promise<HttpInfo<ExtractResponse>> {
        return this.api.extractContentWithHttpInfo(param.extractRequest,  options).toPromise();
    }

    /**
     * Extracts markdown content from up to 10 HTTP(s) URLs. Each URL is processed and the extracted content is returned in the response. 
     * Extract page content as markdown from URLs
     * @param param the request object
     */
    public extractContent(param: ExtractApiExtractContentRequest, options?: ConfigurationOptions): Promise<ExtractResponse> {
        return this.api.extractContent(param.extractRequest,  options).toPromise();
    }

}

import { ObservableSearchApi } from "./ObservableAPI";
import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";

export interface SearchApiSearchRequest {
    /**
     * 
     * @type SearchRequest
     * @memberof SearchApisearch
     */
    searchRequest: SearchRequest
}

export class ObjectSearchApi {
    private api: ObservableSearchApi

    public constructor(configuration: Configuration, requestFactory?: SearchApiRequestFactory, responseProcessor?: SearchApiResponseProcessor) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Perform a web search
     * @param param the request object
     */
    public searchWithHttpInfo(param: SearchApiSearchRequest, options?: ConfigurationOptions): Promise<HttpInfo<Search200Response>> {
        return this.api.searchWithHttpInfo(param.searchRequest,  options).toPromise();
    }

    /**
     * Perform a web search
     * @param param the request object
     */
    public search(param: SearchApiSearchRequest, options?: ConfigurationOptions): Promise<Search200Response> {
        return this.api.search(param.searchRequest,  options).toPromise();
    }

}
