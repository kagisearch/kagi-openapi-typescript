import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

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
import { ObservableExtractApi } from './ObservableAPI';

import { ExtractApiRequestFactory, ExtractApiResponseProcessor} from "../apis/ExtractApi";
export class PromiseExtractApi {
    private api: ObservableExtractApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ExtractApiRequestFactory,
        responseProcessor?: ExtractApiResponseProcessor
    ) {
        this.api = new ObservableExtractApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Extracts markdown content from up to 10 HTTP(s) URLs. Each URL is processed and the extracted content is returned in the response. 
     * Extract page content as markdown from URLs
     * @param extractRequest
     */
    public extractContentWithHttpInfo(extractRequest: ExtractRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ExtractResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.extractContentWithHttpInfo(extractRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Extracts markdown content from up to 10 HTTP(s) URLs. Each URL is processed and the extracted content is returned in the response. 
     * Extract page content as markdown from URLs
     * @param extractRequest
     */
    public extractContent(extractRequest: ExtractRequest, _options?: PromiseConfigurationOptions): Promise<ExtractResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.extractContent(extractRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSearchApi } from './ObservableAPI';

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";
export class PromiseSearchApi {
    private api: ObservableSearchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Perform a web search
     * @param searchRequest
     */
    public searchWithHttpInfo(searchRequest: SearchRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Search200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchWithHttpInfo(searchRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Perform a web search
     * @param searchRequest
     */
    public search(searchRequest: SearchRequest, _options?: PromiseConfigurationOptions): Promise<Search200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.search(searchRequest, observableOptions);
        return result.toPromise();
    }


}



