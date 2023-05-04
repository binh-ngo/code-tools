export const awsconfig = {
    Auth: {
      region: "us-east-1",
      userPoolId: "us-east-1_zc7DFgQVp",
      userPoolWebClientId: "4704be3al145vnhr6rm47hbhh8",
      authenticationFlowType: "USER_PASSWORD_AUTH",
    },
    API: {
      endpoints: [
        {
          name: "MyApi",
          endpoint: "https://s2osri81o6.execute-api.us-east-1.amazonaws.com/prod/"
        },
      ]
    }
  };