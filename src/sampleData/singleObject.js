export const sampleNewsObjects = [
  {
    attributes: {
      authoritative_url: "https://apnews.com/65163e344a4725c823c34be60a2da1ce",
      content: "",
      published_on: "2020-03-24",
      scope: "National",
      summary: "",
      title: "President Donald Trump is trying to reopen businesses within next few weeks"
    },
    id: "1058",
    relationships: {
      article: {
        data: [],
        meta: {
          count: 0
        }
      },
      authoritative_publisher: {data: null},
      authorizer: {
        data: {
          type: "authorizers",
          id: "88"
        },
        links: {
          related: "http://ohioready-api.zwink.net/v1/authorizer/88/"
        }
      },
      tags: {
        data: [
          {
            type: "tags",
            id: "11"
          }
        ],
        meta: {count: 1}
      },
      type: "events"
    }
  }
];

export const sampleIncluded = [
  {
    type: "authorizers",
    id: "75",
    attributes: {
      name: "Grocery Stores"
    }
  }
];