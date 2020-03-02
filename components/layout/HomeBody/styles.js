import { css } from '@emotion/core';

export const homeCls = css`
    body {  font-family: sans-serif; padding: 1em; }
    .ais-SearchBox { margin: 1em 0; color: black}
    .ais-Pagination { margin-top: 1em;}
    .left-panel { float: left; width: 220px; margin-top: 50px}
    .right-panel { margin-left: 220px; max-width: calc(70%) }
    .ais-InstantSearch { max-width: calc(90% - 1rem); overflow: hidden; margin: 0 auto }
    .ais-Hitsitem { margin-bottom: 1em;}
    .hit-name { margin-bottom: .5em ; font-size: 24px}
    .hit-description { fill: red; font-size: 14px; margin-bottom: .5em }
    

.ais-Breadcrumb-list,
.ais-CurrentRefinements-list,
.ais-HierarchicalMenu-list,
.ais-Hits-list,
.ais-Results-list,
.ais-InfiniteHits-list,
.ais-InfiniteResults-list,
.ais-Menu-list,
.ais-NumericMenu-list,
.ais-Pagination-list,
.ais-RatingMenu-list,
.ais-RefinementList-list,
.ais-ToggleRefinement-list {
  margin: 0;
  padding: 0;
  list-style: none; }

.ais-ClearRefinements-button,
.ais-CurrentRefinements-delete,
.ais-CurrentRefinements-reset,
.ais-GeoSearch-redo,
.ais-GeoSearch-reset,
.ais-HierarchicalMenu-showMore,
.ais-InfiniteHits-loadPrevious,
.ais-InfiniteHits-loadMore,
.ais-InfiniteResults-loadMore,
.ais-Menu-showMore,
.ais-RangeInput-submit,
.ais-RefinementList-showMore,
.ais-SearchBox-submit,
.ais-SearchBox-reset,
.ais-VoiceSearch-button {
  padding: 0;
  overflow: visible;
  font: inherit;
  line-height: normal;
  color: inherit;
  background: none;
  border: 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; }
  .ais-ClearRefinements-button::-moz-focus-inner,
  .ais-CurrentRefinements-delete::-moz-focus-inner,
  .ais-CurrentRefinements-reset::-moz-focus-inner,
  .ais-GeoSearch-redo::-moz-focus-inner,
  .ais-GeoSearch-reset::-moz-focus-inner,
  .ais-HierarchicalMenu-showMore::-moz-focus-inner,
  .ais-InfiniteHits-loadPrevious::-moz-focus-inner,
  .ais-InfiniteHits-loadMore::-moz-focus-inner,
  .ais-InfiniteResults-loadMore::-moz-focus-inner,
  .ais-Menu-showMore::-moz-focus-inner,
  .ais-RangeInput-submit::-moz-focus-inner,
  .ais-RefinementList-showMore::-moz-focus-inner,
  .ais-SearchBox-submit::-moz-focus-inner,
  .ais-SearchBox-reset::-moz-focus-inner,
  .ais-VoiceSearch-button::-moz-focus-inner {
    padding: 0;
    border: 0; }
  .ais-ClearRefinements-button[disabled],
  .ais-CurrentRefinements-delete[disabled],
  .ais-CurrentRefinements-reset[disabled],
  .ais-GeoSearch-redo[disabled],
  .ais-GeoSearch-reset[disabled],
  .ais-HierarchicalMenu-showMore[disabled],
  .ais-InfiniteHits-loadPrevious[disabled],
  .ais-InfiniteHits-loadMore[disabled],
  .ais-InfiniteResults-loadMore[disabled],
  .ais-Menu-showMore[disabled],
  .ais-RangeInput-submit[disabled],
  .ais-RefinementList-showMore[disabled],
  .ais-SearchBox-submit[disabled],
  .ais-SearchBox-reset[disabled],
  .ais-VoiceSearch-button[disabled] {
    cursor: default; }

.ais-Breadcrumb-list,
.ais-Breadcrumb-item,
.ais-Pagination-list,
.ais-RangeInput-form,
.ais-RatingMenu-link,
.ais-PoweredBy {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center; }

.ais-GeoSearch,
.ais-GeoSearch-map {
  height: 100%; }

.ais-HierarchicalMenu-list .ais-HierarchicalMenu-list {
  margin-left: 1em; }

.ais-PoweredBy-logo {
  display: block;
  height: 1.2em;
  width: auto; }

.ais-RatingMenu-starIcon {
  display: block;
  width: 20px;
  height: 20px; }

.ais-SearchBox-input::-ms-clear, .ais-SearchBox-input::-ms-reveal {
  display: none;
  width: 0;
  height: 0; }

.ais-SearchBox-input::-webkit-search-decoration, .ais-SearchBox-input::-webkit-search-cancel-button, .ais-SearchBox-input::-webkit-search-results-button, .ais-SearchBox-input::-webkit-search-results-decoration {
  display: none; }

.ais-RangeSlider .rheostat {
  overflow: visible;
  margin-top: 40px;
  margin-bottom: 40px; }

.ais-RangeSlider .rheostat-background {
  height: 6px;
  top: 0px;
  width: 100%; }

.ais-RangeSlider .rheostat-handle {
  margin-left: -12px;
  top: -7px; }

.ais-RangeSlider .rheostat-background {
  position: relative;
  background-color: #ffffff;
  border: 1px solid #aaa; }

.ais-RangeSlider .rheostat-progress {
  position: absolute;
  top: 1px;
  height: 4px;
  background-color: #333; }

.rheostat-handle {
  position: relative;
  z-index: 1;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 1px solid #333;
  border-radius: 50%;
  cursor: -webkit-grab;
  cursor: grab; }

.rheostat-marker {
  margin-left: -1px;
  position: absolute;
  width: 1px;
  height: 5px;
  background-color: #aaa; }

.rheostat-marker--large {
  height: 9px; }

.rheostat-value {
  margin-left: 50%;
  padding-top: 15px;
  position: absolute;
  text-align: center;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%); }

.rheostat-tooltip {
  margin-left: 50%;
  position: absolute;
  top: -22px;
  text-align: center;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%); }

[class^='ais-'] {
  font-size: 1rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box; }

a[class^='ais-'] {
  text-decoration: none; }

.ais-Breadcrumb,
.ais-ClearRefinements,
.ais-CurrentRefinements,
.ais-GeoSearch,
.ais-HierarchicalMenu,
.ais-Hits,
.ais-Results,
.ais-HitsPerPage,
.ais-ResultsPerPage,
.ais-InfiniteHits,
.ais-InfiniteResults,
.ais-Menu,
.ais-MenuSelect,
.ais-NumericMenu,
.ais-NumericSelector,
.ais-Pagination,
.ais-Panel,
.ais-PoweredBy,
.ais-RangeInput,
.ais-RangeSlider,
.ais-RatingMenu,
.ais-RefinementList,
.ais-SearchBox,
.ais-SortBy,
.ais-Stats,
.ais-ToggleRefinement {
  color: #3a4570; }

.ais-Breadcrumb-item--selected,
.ais-HierarchicalMenu-item--selected,
.ais-Menu-item--selected {
  font-weight: bold; }

.ais-Breadcrumb-separator {
  margin: 0 0.3em;
  font-weight: normal; }

.ais-Breadcrumb-link,
.ais-HierarchicalMenu-link,
.ais-Menu-link,
.ais-Pagination-link,
.ais-RatingMenu-link {
  color: #0096db;
  -webkit-transition: color 0.2s ease-out;
  transition: color 0.2s ease-out; }
  .ais-Breadcrumb-link:hover, .ais-Breadcrumb-link:focus,
  .ais-HierarchicalMenu-link:hover,
  .ais-HierarchicalMenu-link:focus,
  .ais-Menu-link:hover,
  .ais-Menu-link:focus,
  .ais-Pagination-link:hover,
  .ais-Pagination-link:focus,
  .ais-RatingMenu-link:hover,
  .ais-RatingMenu-link:focus {
    color: #0073a8; }

.ais-ClearRefinements-button,
.ais-CurrentRefinements-reset,
.ais-GeoSearch-redo,
.ais-GeoSearch-reset,
.ais-HierarchicalMenu-showMore,
.ais-InfiniteHits-loadPrevious,
.ais-InfiniteHits-loadMore,
.ais-InfiniteResults-loadMore,
.ais-Menu-showMore,
.ais-RefinementList-showMore {
  padding: 0.3rem 0.5rem;
  font-size: 0.8rem;
  color: #fff;
  background-color: #0096db;
  border-radius: 5px;
  -webkit-transition: background-color 0.2s ease-out;
  transition: background-color 0.2s ease-out;
  outline: none; }
  .ais-ClearRefinements-button:hover, .ais-ClearRefinements-button:focus,
  .ais-CurrentRefinements-reset:hover,
  .ais-CurrentRefinements-reset:focus,
  .ais-GeoSearch-redo:hover,
  .ais-GeoSearch-redo:focus,
  .ais-GeoSearch-reset:hover,
  .ais-GeoSearch-reset:focus,
  .ais-HierarchicalMenu-showMore:hover,
  .ais-HierarchicalMenu-showMore:focus,
  .ais-InfiniteHits-loadPrevious:hover,
  .ais-InfiniteHits-loadPrevious:focus,
  .ais-InfiniteHits-loadMore:hover,
  .ais-InfiniteHits-loadMore:focus,
  .ais-InfiniteResults-loadMore:hover,
  .ais-InfiniteResults-loadMore:focus,
  .ais-Menu-showMore:hover,
  .ais-Menu-showMore:focus,
  .ais-RefinementList-showMore:hover,
  .ais-RefinementList-showMore:focus {
    background-color: #0073a8; }

.ais-ClearRefinements-button--disabled,
.ais-GeoSearch-redo--disabled,
.ais-GeoSearch-reset--disabled,
.ais-HierarchicalMenu-showMore--disabled,
.ais-InfiniteHits-loadMore--disabled,
.ais-InfiniteResults-loadMore--disabled,
.ais-Menu-showMore--disabled,
.ais-RefinementList-showMore--disabled {
  opacity: 0.6;
  cursor: not-allowed; }
  .ais-ClearRefinements-button--disabled:hover, .ais-ClearRefinements-button--disabled:focus,
  .ais-GeoSearch-redo--disabled:hover,
  .ais-GeoSearch-redo--disabled:focus,
  .ais-GeoSearch-reset--disabled:hover,
  .ais-GeoSearch-reset--disabled:focus,
  .ais-HierarchicalMenu-showMore--disabled:hover,
  .ais-HierarchicalMenu-showMore--disabled:focus,
  .ais-InfiniteHits-loadMore--disabled:hover,
  .ais-InfiniteHits-loadMore--disabled:focus,
  .ais-InfiniteResults-loadMore--disabled:hover,
  .ais-InfiniteResults-loadMore--disabled:focus,
  .ais-Menu-showMore--disabled:hover,
  .ais-Menu-showMore--disabled:focus,
  .ais-RefinementList-showMore--disabled:hover,
  .ais-RefinementList-showMore--disabled:focus {
    background-color: #0096db; }

.ais-InfiniteHits-loadPrevious--disabled {
  display: none; }

.ais-CurrentRefinements {
  margin-top: -0.3rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap; }

.ais-CurrentRefinements-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap; }

.ais-CurrentRefinements-item {
  margin-right: 0.3rem;
  margin-top: 0.3rem;
  padding: 0.3rem 0.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background-color: #495588;
  border-radius: 5px; }

.ais-CurrentRefinements-category {
  margin-left: 0.3em;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; }

.ais-CurrentRefinements-delete {
  margin-left: 0.3rem; }

.ais-CurrentRefinements-label,
.ais-CurrentRefinements-categoryLabel,
.ais-CurrentRefinements-delete {
  white-space: nowrap;
  font-size: 0.8rem;
  color: #fff; }

.ais-CurrentRefinements-reset {
  margin-top: 0.3rem;
  white-space: nowrap; }
  .ais-CurrentRefinements-reset + .ais-CurrentRefinements-list {
    margin-left: 0.3rem; }

.ais-GeoSearch {
  position: relative; }

.ais-GeoSearch-control {
  position: absolute;
  top: 0.8rem;
  left: 3.75rem; }

.ais-GeoSearch-label {
  display: block;
  padding: 0.3rem 0.5rem;
  font-size: 0.8rem;
  background-color: #fff;
  border-radius: 5px;
  -webkit-transition: background-color 0.2s ease-out;
  transition: background-color 0.2s ease-out;
  -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0 1px 1px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 1px;
  outline: none; }

.ais-GeoSearch-input {
  margin: 0 0.25rem 0 0; }

.ais-GeoSearch-label,
.ais-GeoSearch-redo,
.ais-GeoSearch-reset {
  white-space: nowrap; }

.ais-GeoSearch-reset {
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%); }

.ais-HierarchicalMenu-link,
.ais-Menu-link {
  display: block;
  line-height: 1.5; }

.ais-HierarchicalMenu-list,
.ais-Menu-list,
.ais-NumericMenu-list,
.ais-RatingMenu-list,
.ais-RefinementList-list {
  font-weight: normal;
  line-height: 1.5; }

.ais-HierarchicalMenu-link:after {
  margin-left: 0.3em;
  content: '';
  width: 10px;
  height: 10px;
  display: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M7.3 24l-2.8-2.8 9.3-9.2-9.3-9.2 2.8-2.8 12.2 12z%27 fill%3D%22%233A4570%22 /%3E%3C/svg%3E");
  background-size: 100% 100%; }

.ais-HierarchicalMenu-item--parent > .ais-HierarchicalMenu-link:after {
  display: inline-block; }

.ais-HierarchicalMenu-item--selected > .ais-HierarchicalMenu-link:after {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg); }

.ais-CurrentRefinements-count,
.ais-RatingMenu-count {
  font-size: 0.8rem; }
  .ais-CurrentRefinements-count:before,
  .ais-RatingMenu-count:before {
    content: '('; }
  .ais-CurrentRefinements-count:after,
  .ais-RatingMenu-count:after {
    content: ')'; }

.ais-HierarchicalMenu-count,
.ais-Menu-count,
.ais-RefinementList-count,
.ais-ToggleRefinement-count {
  padding: 0.1rem 0.4rem;
  font-size: 0.8rem;
  color: #3a4570;
  background-color: #dfe2ee;
  border-radius: 8px; }

.ais-HierarchicalMenu-showMore,
.ais-Menu-showMore,
.ais-RefinementList-showMore {
  margin-top: 0.5rem; }

.ais-Highlight-highlighted,
.ais-Snippet-highlighted {
  background-color: #ffc168; }

.ais-InfiniteHits-list,
.ais-InfiniteResults-list,
.ais-Hits-list,
.ais-Results-list {
  margin-top: -1rem;
  margin-left: -1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap; }
  .ais-Panel-body .ais-InfiniteHits-list, .ais-Panel-body
  .ais-InfiniteResults-list, .ais-Panel-body
  .ais-Hits-list, .ais-Panel-body
  .ais-Results-list {
    margin: 0.5rem 0 0 -1rem; }

.ais-InfiniteHits-item,
.ais-InfiniteResults-item,
.ais-Hits-item,
.ais-Results-item {
  margin-top: 1rem;
  margin-left: 1rem;
  padding: 1rem;
  width: calc(100% - 1rem);
  border: 1px solid #c4c8d8;
  -webkit-box-shadow: 0 2px 5px 0px #e3e5ec;
  box-shadow: 0 2px 5px 0px #e3e5ec; }
  .ais-Panel-body .ais-InfiniteHits-item, .ais-Panel-body
  .ais-InfiniteResults-item, .ais-Panel-body
  .ais-Hits-item, .ais-Panel-body
  .ais-Results-item {
    margin: 0.5rem 0 0.5rem 1rem; }

.ais-InfiniteHits-loadMore,
.ais-InfiniteResults-loadMore {
  margin-top: 1rem; }

.ais-InfiniteHits-loadPrevious {
  margin-bottom: 1rem; }

.ais-MenuSelect-select,
.ais-NumericSelector-select,
.ais-HitsPerPage-select,
.ais-ResultsPerPage-select,
.ais-SortBy-select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0.3rem 2rem 0.3rem 0.3rem;
  max-width: 100%;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M0 7.3l2.8-2.8 9.2 9.3 9.2-9.3 2.8 2.8-12 12.2z%27 fill%3D%22%233A4570%22 /%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 10px 10px;
  background-position: 92% 50%;
  border: 1px solid #c4c8d8;
  border-radius: 5px; }

.ais-Panel--collapsible {
  position: relative; }
  .ais-Panel--collapsible.ais-Panel--collapsed .ais-Panel-body, .ais-Panel--collapsible.ais-Panel--collapsed .ais-Panel-footer {
    display: none; }
  .ais-Panel--collapsible .ais-Panel-collapseButton {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0;
    border: none;
    background: none; }

.ais-Panel-header {
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  border-bottom: 1px solid #c4c8d8; }

.ais-Panel-footer {
  margin-top: 0.5rem;
  font-size: 0.8rem; }

.ais-RangeInput-input {
  padding: 0 0.2rem;
  width: 5rem;
  height: 1.5rem;
  line-height: 1.5rem; }

.ais-RangeInput-separator {
  margin: 0 0.3rem; }

.ais-RangeInput-submit {
  margin-left: 0.3rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0 0.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 0.8rem;
  color: #fff;
  background-color: #0096db;
  border: none;
  border-radius: 5px;
  -webkit-transition: 0.2s ease-out;
  transition: 0.2s ease-out;
  outline: none; }
  .ais-RangeInput-submit:hover, .ais-RangeInput-submit:focus {
    background-color: #0073a8; }

.ais-RatingMenu-count {
  color: #3a4570; }

.ais-Pagination-list {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center; }

.ais-Pagination-item + .ais-Pagination-item {
  margin-left: 0.3rem; }

.ais-Pagination-link {
  padding: 0.3rem 0.6rem;
  display: block;
  border: 1px solid #c4c8d8;
  border-radius: 5px;
  -webkit-transition: background-color 0.2s ease-out;
  transition: background-color 0.2s ease-out; }
  .ais-Pagination-link:hover, .ais-Pagination-link:focus {
    background-color: #e3e5ec; }
  .ais-Pagination-item--disabled .ais-Pagination-link {
    opacity: 0.6;
    cursor: not-allowed;
    color: #a5abc4; }
    .ais-Pagination-item--disabled .ais-Pagination-link:hover, .ais-Pagination-item--disabled .ais-Pagination-link:focus {
      color: #a5abc4;
      background-color: #fff; }
  .ais-Pagination-item--selected .ais-Pagination-link {
    color: #fff;
    background-color: #0096db;
    border-color: #0096db; }
    .ais-Pagination-item--selected .ais-Pagination-link:hover, .ais-Pagination-item--selected .ais-Pagination-link:focus {
      color: #fff; }

.ais-PoweredBy-text,
.rheostat-tooltip,
.rheostat-value,
.ais-Stats-text {
  font-size: 0.8rem; }

.ais-PoweredBy-logo {
  margin-left: 0.3rem; }

.ais-RangeSlider .rheostat-progress {
  background-color: #495588; }

.ais-RangeSlider .rheostat-background {
  border-color: #878faf;
  -webkit-box-sizing: border-box;
  box-sizing: border-box; }

.ais-RangeSlider .rheostat-handle {
  border-color: #878faf; }

.ais-RangeSlider .rheostat-marker {
  background-color: #878faf; }

.ais-Panel-body .ais-RangeSlider {
  margin: 2rem 0; }

.ais-RangeSlider-handle {
  width: 20px;
  height: 20px;
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  border: 1px solid #46AEDA;
  border-radius: 50%;
  cursor: pointer; }

.ais-RangeSlider-tooltip {
  position: absolute;
  background: #FFFFFF;
  top: -22px;
  font-size: .8em; }

.ais-RangeSlider-value {
  width: 40px;
  position: absolute;
  text-align: center;
  margin-left: -20px;
  padding-top: 15px;
  font-size: .8em; }

.ais-RangeSlider-marker {
  position: absolute;
  background: #DDD;
  margin-left: -1px;
  width: 1px;
  height: 5px; }

.ais-RatingMenu-item--disabled .ais-RatingMenu-count, .ais-RatingMenu-item--disabled
.ais-RatingMenu-label {
  color: #c4c8d8; }

.ais-RatingMenu-item--selected {
  font-weight: bold; }

.ais-RatingMenu-link {
  line-height: 1.5; }
  .ais-RatingMenu-link > * + * {
    margin-left: 0.3rem; }

.ais-RatingMenu-starIcon {
  position: relative;
  top: -1px;
  width: 15px;
  fill: #ffc168; }
  .ais-RatingMenu-item--disabled .ais-RatingMenu-starIcon {
    fill: #c4c8d8; }

.ais-HierarchicalMenu-searchBox > *,
.ais-Menu-searchBox > *,
.ais-RefinementList-searchBox > * {
  margin-bottom: 0.5rem; }

.ais-SearchBox-form {
  display: block;
  position: relative; }

.ais-SearchBox-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0.3rem 1.7rem;
  width: 100%;
  position: relative;
  background-color: #fff;
  border: 1px solid #c4c8d8;
  border-radius: 5px; }
  .ais-SearchBox-input::-webkit-input-placeholder {
    color: #a5aed1; }
  .ais-SearchBox-input::-moz-placeholder {
    color: #a5aed1; }
  .ais-SearchBox-input:-ms-input-placeholder {
    color: #a5aed1; }
  .ais-SearchBox-input:-moz-placeholder {
    color: #a5aed1; }

.ais-SearchBox-submit,
.ais-SearchBox-reset,
.ais-SearchBox-loadingIndicator {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: absolute;
  z-index: 1;
  width: 20px;
  height: 20px;
  top: 50%;
  right: 0.3rem;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%); }

.ais-SearchBox-submit {
  left: 0.3rem; }

.ais-SearchBox-reset {
  right: 0.3rem; }

.ais-SearchBox-submitIcon,
.ais-SearchBox-resetIcon,
.ais-SearchBox-loadingIcon {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%); }

.ais-SearchBox-submitIcon path,
.ais-SearchBox-resetIcon path {
  fill: #495588; }

.ais-SearchBox-submitIcon {
  width: 14px;
  height: 14px; }

.ais-SearchBox-resetIcon {
  width: 12px;
  height: 12px; }

.ais-SearchBox-loadingIcon {
  width: 16px;
  height: 16px; }

.ais-VoiceSearch-button {
  border: none;
  width: 24px;
  height: 24px;
  padding: 4px;
  border-radius: 50%;
  color: #3a4570;
  background-color: transparent; }

.ais-VoiceSearch-button svg {
  color: currentColor; }

.ais-VoiceSearch-button:hover {
  cursor: pointer;
  background-color: #a5aed1;
  color: #ffffff; }

.ais-VoiceSearch-button:disabled {
  color: #a5aed1; }

.ais-VoiceSearch-button:disabled:hover {
  color: #a5aed1;
  cursor: not-allowed;
  background: inherit; }

      `;