/**
 * ELASTICSEARCH CONFIDENTIAL
 * _____________________________
 *
 *  [2014] Elasticsearch Incorporated All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Elasticsearch Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Elasticsearch Incorporated
 * and its suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Elasticsearch Incorporated.
 */

define(["_","./api","./api_2_0/aggregations","./api_2_0/aliases","./api_2_0/cat","./api_2_0/cluster","./api_2_0/count","./api_2_0/document","./api_2_0/field_stats","./api_2_0/filter","./api_2_0/nodes","./api_2_0/globals","./api_2_0/indices","./api_2_0/mappings","./api_2_0/percolator","./api_2_0/query","./api_2_0/snapshot_restore","./api_2_0/search","./api_2_0/settings","./api_2_0/templates","./api_2_0/warmers"],function(a,_){function i(a,i){_.Api.call(this,"api_2_0",a,i),t.each(function(a){a(this)},this)}var t=a(arguments).rest(2);return i.prototype=a.create(_.Api.prototype,{constructor:i}),function(_){_.addEndpointDescription=function(i,t){if(t){var p={};a.each(t.patterns||[],function(a){a.indexOf("{indices}")>=0&&(p.ignore_unavailable="__flag__",p.allow_no_indices="__flag__",p.expand_wildcards=["open","closed"])}),p&&(t.url_params=t.url_params||{},a.defaults(t.url_params,p))}Object.getPrototypeOf(_).addEndpointDescription.call(this,i,t)}}(i.prototype),i});