import { gql } from 'graphql-request';
import { GraphQLClient } from 'graphql-request';
export async function load({ fetch }) {
    const Hygraph = new GraphQLClient(
        "https://eu-west-2.cdn.hygraph.com/content/cljb9ttgd2n9r01ue92y14we5/master0",
        {
        headers: {
            Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2OTExNDUzODYsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2xqYjl0dGdkMm45cjAxdWU5MnkxNHdlNS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYzlmZGQ1ODItOWEwYi00YWFhLThmMjItMmNiZWJjZDdkYjVhIiwianRpIjoiY2xrd2dhcnFnMGVlNTAxdDliMjd6ZmVuZiJ9.aCi7Sv62AAKnmiYkrbt7yTZWGkibvkFhrEYSLIc75N2pAlLYYYly14hGRIgQW_usdL-4zpkB5S7ALg93rT_8cltRTvZ19u92RdxqgrN8zBt3xzEXUeALdy3OudwmjDM13eoMxPRLzoI3Bo3lJvoiDWoeZDB36FRrZvoz3M9wmDf41ISX5TAuBpW7N9nltcIEFLBK32utarpi4StK2jSdi1l08bnYuDkagekQtQZSzR0jrms0yeAHl1EoDb2tD1YXM3UCGGw8hw5KQJDJA3d84rH1NWLA3gPVlaBS04QbnBvQv6UI_vIxdWbmWdzr1AEH577kLJ2VY12mru9dq2ch0ja3Cttu4GGPGb5nJhpeX-lN_wFcoQD5ZVFREVtw2jAOA0oPo5xXfOuZJgrEfG31RXLzl6HXcmLMVGRWhh_swwO3TOc0bBhwFXQ3qo466C7VZWxLUMuKzyPDyeNqWq2T6lNw4G5UOCEMxqhwOpG80AqMt-Wxrjw3Sj71_dg2anuvB4WfLE4FTkIQvQ1bzEFalhFxnwPnT35ptzSM4jwY5PSW5Xs4nKDcRfa6e03X_Mr5aF0hHO6WRGUZb1K76bFu-mRrhHZMrZQE17FacixCKxMwEh9tfzue4J41QznyUox5v0b8LHWiaRUhWabW4uA7Rt9_FUcYH6a0QUN8f3f7hMQ`
        }
        }
    );
    const QUERY = gql`
    {
      services {
        name
      }
      clients {
        name
      }
    }`
    const {services, clients} = await Hygraph.request(QUERY)
    console.log(services, clients)
    return {
        services,
        clients
    }
}