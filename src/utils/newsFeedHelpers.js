import {publishedDate} from "./dateHelpers";

export const NEWS_ITEM_NAME = "newsItem";

export function getEarliestFetchedPublishDate(newsObjects) {
  return newsObjects.length
    ? new Date(newsObjects[newsObjects.length - 1].attributes.published_on)
    : null;
}

export function getPublishDateOfFirstVisibleNewsItem(newsObjects) {
  if (newsObjects.length) {
    const newsItemElements = [...document.getElementsByName(NEWS_ITEM_NAME)];

    const ixFirstVisibleNewsItem = newsItemElements.findIndex(element =>
      element.offsetTop + element.offsetParent.offsetTop >= document.documentElement.scrollTop
    );

    return ixFirstVisibleNewsItem > -1
      ? publishedDate(newsObjects[ixFirstVisibleNewsItem])
      : publishedDate(newsObjects[0]);
  }

  return null
}

export function scrollingRequired(newsObjects, viewDate) {
  const publishDateOfFirstVisible = getPublishDateOfFirstVisibleNewsItem(newsObjects);
  return publishDateOfFirstVisible &&
    (viewDate < publishDateOfFirstVisible || viewDate > publishDateOfFirstVisible);
}

export function getPositionOfFirstNewsItemPublishedBefore(newsObjects, date) {
  const ixNewsObjectToScrollTo = newsObjects.findIndex(object =>
    publishedDate(object) <= date
  );

  const newsItemElements = [...document.getElementsByName(NEWS_ITEM_NAME)];
  const elementToScrollTo = newsItemElements[ixNewsObjectToScrollTo];
  return elementToScrollTo.offsetTop;
}