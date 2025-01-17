import * as Types from './schema';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const AddChatMessageDocument = gql`
    mutation addChatMessage($chatId: ID!, $body: String!) {
  addChatMessage(chatId: $chatId, body: $body) {
    success
    message
  }
}
    `;
export type AddChatMessageMutationFn = Apollo.MutationFunction<Types.AddChatMessageMutation, Types.AddChatMessageMutationVariables>;

/**
 * __useAddChatMessageMutation__
 *
 * To run a mutation, you first call `useAddChatMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddChatMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addChatMessageMutation, { data, loading, error }] = useAddChatMessageMutation({
 *   variables: {
 *      chatId: // value for 'chatId'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useAddChatMessageMutation(baseOptions?: Apollo.MutationHookOptions<Types.AddChatMessageMutation, Types.AddChatMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.AddChatMessageMutation, Types.AddChatMessageMutationVariables>(AddChatMessageDocument, options);
      }
export type AddChatMessageMutationHookResult = ReturnType<typeof useAddChatMessageMutation>;
export type AddChatMessageMutationResult = Apollo.MutationResult<Types.AddChatMessageMutation>;
export type AddChatMessageMutationOptions = Apollo.BaseMutationOptions<Types.AddChatMessageMutation, Types.AddChatMessageMutationVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(input: {identifier: $email, password: $password, provider: "local"}) {
    jwt
    user {
      username
      id
      email
      role {
        type
        name
        description
        id
      }
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<Types.LoginMutation, Types.LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<Types.LoginMutation, Types.LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.LoginMutation, Types.LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<Types.LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<Types.LoginMutation, Types.LoginMutationVariables>;
export const GetChallengesDocument = gql`
    query getChallenges {
  codingChallenges {
    data {
      attributes {
        challenge
        difficulty
      }
    }
  }
}
    `;

/**
 * __useGetChallengesQuery__
 *
 * To run a query within a React component, call `useGetChallengesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChallengesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChallengesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetChallengesQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetChallengesQuery, Types.GetChallengesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetChallengesQuery, Types.GetChallengesQueryVariables>(GetChallengesDocument, options);
      }
export function useGetChallengesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetChallengesQuery, Types.GetChallengesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetChallengesQuery, Types.GetChallengesQueryVariables>(GetChallengesDocument, options);
        }
export type GetChallengesQueryHookResult = ReturnType<typeof useGetChallengesQuery>;
export type GetChallengesLazyQueryHookResult = ReturnType<typeof useGetChallengesLazyQuery>;
export type GetChallengesQueryResult = Apollo.QueryResult<Types.GetChallengesQuery, Types.GetChallengesQueryVariables>;
export const GetChatsDocument = gql`
    query getChats {
  chats {
    data {
      id
      attributes {
        name
        messages {
          body
          timestamp
          author {
            data {
              attributes {
                username
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetChatsQuery__
 *
 * To run a query within a React component, call `useGetChatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetChatsQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetChatsQuery, Types.GetChatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetChatsQuery, Types.GetChatsQueryVariables>(GetChatsDocument, options);
      }
export function useGetChatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetChatsQuery, Types.GetChatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetChatsQuery, Types.GetChatsQueryVariables>(GetChatsDocument, options);
        }
export type GetChatsQueryHookResult = ReturnType<typeof useGetChatsQuery>;
export type GetChatsLazyQueryHookResult = ReturnType<typeof useGetChatsLazyQuery>;
export type GetChatsQueryResult = Apollo.QueryResult<Types.GetChatsQuery, Types.GetChatsQueryVariables>;
export const GetChatDocument = gql`
    query getChat($id: ID!) {
  chat(id: $id) {
    data {
      id
      attributes {
        name
        messages {
          id
          body
          timestamp
          author {
            data {
              attributes {
                username
                email
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetChatQuery__
 *
 * To run a query within a React component, call `useGetChatQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetChatQuery(baseOptions: Apollo.QueryHookOptions<Types.GetChatQuery, Types.GetChatQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetChatQuery, Types.GetChatQueryVariables>(GetChatDocument, options);
      }
export function useGetChatLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetChatQuery, Types.GetChatQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetChatQuery, Types.GetChatQueryVariables>(GetChatDocument, options);
        }
export type GetChatQueryHookResult = ReturnType<typeof useGetChatQuery>;
export type GetChatLazyQueryHookResult = ReturnType<typeof useGetChatLazyQuery>;
export type GetChatQueryResult = Apollo.QueryResult<Types.GetChatQuery, Types.GetChatQueryVariables>;
export const GetCohortsDocument = gql`
    query getCohorts {
  cohorts {
    data {
      attributes {
        name
        start_date
        logo {
          data {
            attributes {
              url
              alternativeText
              caption
              previewUrl
            }
          }
        }
        students {
          data {
            id
            attributes {
              start_date
              user {
                data {
                  id
                  attributes {
                    firstname
                    lastname
                    avatar {
                      data {
                        attributes {
                          url
                          alternativeText
                          name
                          caption
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetCohortsQuery__
 *
 * To run a query within a React component, call `useGetCohortsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCohortsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCohortsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCohortsQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetCohortsQuery, Types.GetCohortsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetCohortsQuery, Types.GetCohortsQueryVariables>(GetCohortsDocument, options);
      }
export function useGetCohortsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetCohortsQuery, Types.GetCohortsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetCohortsQuery, Types.GetCohortsQueryVariables>(GetCohortsDocument, options);
        }
export type GetCohortsQueryHookResult = ReturnType<typeof useGetCohortsQuery>;
export type GetCohortsLazyQueryHookResult = ReturnType<typeof useGetCohortsLazyQuery>;
export type GetCohortsQueryResult = Apollo.QueryResult<Types.GetCohortsQuery, Types.GetCohortsQueryVariables>;
export const StudentCohortDocument = gql`
    query studentCohort($userId: ID) {
  students(filters: {user: {id: {eq: $userId}}}) {
    data {
      id
      attributes {
        cohort {
          data {
            attributes {
              name
              start_date
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useStudentCohortQuery__
 *
 * To run a query within a React component, call `useStudentCohortQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentCohortQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentCohortQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useStudentCohortQuery(baseOptions?: Apollo.QueryHookOptions<Types.StudentCohortQuery, Types.StudentCohortQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.StudentCohortQuery, Types.StudentCohortQueryVariables>(StudentCohortDocument, options);
      }
export function useStudentCohortLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.StudentCohortQuery, Types.StudentCohortQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.StudentCohortQuery, Types.StudentCohortQueryVariables>(StudentCohortDocument, options);
        }
export type StudentCohortQueryHookResult = ReturnType<typeof useStudentCohortQuery>;
export type StudentCohortLazyQueryHookResult = ReturnType<typeof useStudentCohortLazyQuery>;
export type StudentCohortQueryResult = Apollo.QueryResult<Types.StudentCohortQuery, Types.StudentCohortQueryVariables>;
export const GetAllCoursesDocument = gql`
    query getAllCourses {
  courses {
    data {
      id
      attributes {
        name
        description
        objectives {
          name
        }
        mentors {
          data {
            attributes {
              user {
                data {
                  attributes {
                    firstname
                    lastname
                    email
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllCoursesQuery__
 *
 * To run a query within a React component, call `useGetAllCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCoursesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCoursesQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetAllCoursesQuery, Types.GetAllCoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetAllCoursesQuery, Types.GetAllCoursesQueryVariables>(GetAllCoursesDocument, options);
      }
export function useGetAllCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetAllCoursesQuery, Types.GetAllCoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetAllCoursesQuery, Types.GetAllCoursesQueryVariables>(GetAllCoursesDocument, options);
        }
export type GetAllCoursesQueryHookResult = ReturnType<typeof useGetAllCoursesQuery>;
export type GetAllCoursesLazyQueryHookResult = ReturnType<typeof useGetAllCoursesLazyQuery>;
export type GetAllCoursesQueryResult = Apollo.QueryResult<Types.GetAllCoursesQuery, Types.GetAllCoursesQueryVariables>;
export const GetCourseProjectDocument = gql`
    query getCourseProject($name: String, $projectIds: ID) {
  courses(filters: {name: {eq: $name}}) {
    data {
      attributes {
        name
        projects(filters: {id: {eq: $projectIds}}) {
          data {
            id
            attributes {
              name
              description
              sprints {
                pages {
                  data {
                    attributes {
                      title
                      slug
                      locale
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetCourseProjectQuery__
 *
 * To run a query within a React component, call `useGetCourseProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCourseProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCourseProjectQuery({
 *   variables: {
 *      name: // value for 'name'
 *      projectIds: // value for 'projectIds'
 *   },
 * });
 */
export function useGetCourseProjectQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetCourseProjectQuery, Types.GetCourseProjectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetCourseProjectQuery, Types.GetCourseProjectQueryVariables>(GetCourseProjectDocument, options);
      }
export function useGetCourseProjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetCourseProjectQuery, Types.GetCourseProjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetCourseProjectQuery, Types.GetCourseProjectQueryVariables>(GetCourseProjectDocument, options);
        }
export type GetCourseProjectQueryHookResult = ReturnType<typeof useGetCourseProjectQuery>;
export type GetCourseProjectLazyQueryHookResult = ReturnType<typeof useGetCourseProjectLazyQuery>;
export type GetCourseProjectQueryResult = Apollo.QueryResult<Types.GetCourseProjectQuery, Types.GetCourseProjectQueryVariables>;
export const GetCourseProjectsDocument = gql`
    query getCourseProjects($name: String) {
  courses(filters: {name: {eq: $name}}) {
    data {
      attributes {
        projects {
          data {
            id
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetCourseProjectsQuery__
 *
 * To run a query within a React component, call `useGetCourseProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCourseProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCourseProjectsQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetCourseProjectsQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetCourseProjectsQuery, Types.GetCourseProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetCourseProjectsQuery, Types.GetCourseProjectsQueryVariables>(GetCourseProjectsDocument, options);
      }
export function useGetCourseProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetCourseProjectsQuery, Types.GetCourseProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetCourseProjectsQuery, Types.GetCourseProjectsQueryVariables>(GetCourseProjectsDocument, options);
        }
export type GetCourseProjectsQueryHookResult = ReturnType<typeof useGetCourseProjectsQuery>;
export type GetCourseProjectsLazyQueryHookResult = ReturnType<typeof useGetCourseProjectsLazyQuery>;
export type GetCourseProjectsQueryResult = Apollo.QueryResult<Types.GetCourseProjectsQuery, Types.GetCourseProjectsQueryVariables>;
export const GetCourseByNameDocument = gql`
    query getCourseByName($name: String!) {
  courses(filters: {name: {eq: $name}}) {
    data {
      attributes {
        name
        description
        createdAt
        projects {
          data {
            id
            attributes {
              name
              description
              sprints {
                name
                length
                objectives {
                  name
                }
                pages {
                  data {
                    attributes {
                      title
                      slug
                      locale
                    }
                  }
                }
              }
            }
          }
        }
        mentors {
          data {
            attributes {
              user {
                data {
                  attributes {
                    firstname
                    lastname
                    email
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetCourseByNameQuery__
 *
 * To run a query within a React component, call `useGetCourseByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCourseByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCourseByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetCourseByNameQuery(baseOptions: Apollo.QueryHookOptions<Types.GetCourseByNameQuery, Types.GetCourseByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetCourseByNameQuery, Types.GetCourseByNameQueryVariables>(GetCourseByNameDocument, options);
      }
export function useGetCourseByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetCourseByNameQuery, Types.GetCourseByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetCourseByNameQuery, Types.GetCourseByNameQueryVariables>(GetCourseByNameDocument, options);
        }
export type GetCourseByNameQueryHookResult = ReturnType<typeof useGetCourseByNameQuery>;
export type GetCourseByNameLazyQueryHookResult = ReturnType<typeof useGetCourseByNameLazyQuery>;
export type GetCourseByNameQueryResult = Apollo.QueryResult<Types.GetCourseByNameQuery, Types.GetCourseByNameQueryVariables>;
export const GetPageDocument = gql`
    query getPage($slug: String) {
  pages(filters: {slug: {eq: $slug}}) {
    data {
      id
      attributes {
        locale
        slug
        title
        contentSections {
          ... on ComponentSectionsHeader {
            __typename
            id
            title
            subtitle
          }
          ... on ComponentSectionsRichText {
            __typename
            id
            content
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetPageQuery__
 *
 * To run a query within a React component, call `useGetPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetPageQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetPageQuery, Types.GetPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetPageQuery, Types.GetPageQueryVariables>(GetPageDocument, options);
      }
export function useGetPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetPageQuery, Types.GetPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetPageQuery, Types.GetPageQueryVariables>(GetPageDocument, options);
        }
export type GetPageQueryHookResult = ReturnType<typeof useGetPageQuery>;
export type GetPageLazyQueryHookResult = ReturnType<typeof useGetPageLazyQuery>;
export type GetPageQueryResult = Apollo.QueryResult<Types.GetPageQuery, Types.GetPageQueryVariables>;
export const GetPagesDocument = gql`
    query getPages {
  pages {
    data {
      id
      attributes {
        locale
        slug
        contentSections {
          ... on ComponentSectionsHeader {
            __typename
            id
            title
            subtitle
          }
          ... on ComponentSectionsRichText {
            __typename
            id
            content
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetPagesQuery__
 *
 * To run a query within a React component, call `useGetPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPagesQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetPagesQuery, Types.GetPagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetPagesQuery, Types.GetPagesQueryVariables>(GetPagesDocument, options);
      }
export function useGetPagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetPagesQuery, Types.GetPagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetPagesQuery, Types.GetPagesQueryVariables>(GetPagesDocument, options);
        }
export type GetPagesQueryHookResult = ReturnType<typeof useGetPagesQuery>;
export type GetPagesLazyQueryHookResult = ReturnType<typeof useGetPagesLazyQuery>;
export type GetPagesQueryResult = Apollo.QueryResult<Types.GetPagesQuery, Types.GetPagesQueryVariables>;
export const GetProjectsDocument = gql`
    query getProjects {
  projects {
    data {
      id
      attributes {
        name
        description
        sprints {
          name
          length
          objectives {
            name
          }
          pages {
            data {
              attributes {
                title
                slug
                locale
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetProjectsQuery__
 *
 * To run a query within a React component, call `useGetProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProjectsQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetProjectsQuery, Types.GetProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetProjectsQuery, Types.GetProjectsQueryVariables>(GetProjectsDocument, options);
      }
export function useGetProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetProjectsQuery, Types.GetProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetProjectsQuery, Types.GetProjectsQueryVariables>(GetProjectsDocument, options);
        }
export type GetProjectsQueryHookResult = ReturnType<typeof useGetProjectsQuery>;
export type GetProjectsLazyQueryHookResult = ReturnType<typeof useGetProjectsLazyQuery>;
export type GetProjectsQueryResult = Apollo.QueryResult<Types.GetProjectsQuery, Types.GetProjectsQueryVariables>;
export const GetProjectDocument = gql`
    query getProject($id: ID!) {
  project(id: $id) {
    data {
      attributes {
        name
        description
        calc_length
        sprints {
          name
          length
          objectives {
            name
          }
          pages {
            data {
              attributes {
                title
                slug
                locale
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetProjectQuery__
 *
 * To run a query within a React component, call `useGetProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProjectQuery(baseOptions: Apollo.QueryHookOptions<Types.GetProjectQuery, Types.GetProjectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetProjectQuery, Types.GetProjectQueryVariables>(GetProjectDocument, options);
      }
export function useGetProjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetProjectQuery, Types.GetProjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetProjectQuery, Types.GetProjectQueryVariables>(GetProjectDocument, options);
        }
export type GetProjectQueryHookResult = ReturnType<typeof useGetProjectQuery>;
export type GetProjectLazyQueryHookResult = ReturnType<typeof useGetProjectLazyQuery>;
export type GetProjectQueryResult = Apollo.QueryResult<Types.GetProjectQuery, Types.GetProjectQueryVariables>;
export const GetSpikesDocument = gql`
    query getSpikes {
  spikes {
    data {
      id
      attributes {
        title
        sprint_day
        recording {
          data {
            attributes {
              __typename
              url
            }
          }
        }
        content {
          data {
            attributes {
              __typename
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetSpikesQuery__
 *
 * To run a query within a React component, call `useGetSpikesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpikesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpikesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSpikesQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetSpikesQuery, Types.GetSpikesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetSpikesQuery, Types.GetSpikesQueryVariables>(GetSpikesDocument, options);
      }
export function useGetSpikesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetSpikesQuery, Types.GetSpikesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetSpikesQuery, Types.GetSpikesQueryVariables>(GetSpikesDocument, options);
        }
export type GetSpikesQueryHookResult = ReturnType<typeof useGetSpikesQuery>;
export type GetSpikesLazyQueryHookResult = ReturnType<typeof useGetSpikesLazyQuery>;
export type GetSpikesQueryResult = Apollo.QueryResult<Types.GetSpikesQuery, Types.GetSpikesQueryVariables>;
export const GetSpikeDocument = gql`
    query getSpike($id: ID!) {
  spike(id: $id) {
    data {
      attributes {
        title
        sprint_day
        recording {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetSpikeQuery__
 *
 * To run a query within a React component, call `useGetSpikeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpikeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpikeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSpikeQuery(baseOptions: Apollo.QueryHookOptions<Types.GetSpikeQuery, Types.GetSpikeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetSpikeQuery, Types.GetSpikeQueryVariables>(GetSpikeDocument, options);
      }
export function useGetSpikeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetSpikeQuery, Types.GetSpikeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetSpikeQuery, Types.GetSpikeQueryVariables>(GetSpikeDocument, options);
        }
export type GetSpikeQueryHookResult = ReturnType<typeof useGetSpikeQuery>;
export type GetSpikeLazyQueryHookResult = ReturnType<typeof useGetSpikeLazyQuery>;
export type GetSpikeQueryResult = Apollo.QueryResult<Types.GetSpikeQuery, Types.GetSpikeQueryVariables>;
export const FilterStudentByUserIdDocument = gql`
    query filterStudentByUserId($userId: ID) {
  students(filters: {user: {id: {eq: $userId}}}) {
    data {
      attributes {
        user {
          data {
            id
            attributes {
              firstname
              lastname
              email
              avatar {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
        github
        linkedin
        start_date
        cohort {
          data {
            attributes {
              name
              start_date
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useFilterStudentByUserIdQuery__
 *
 * To run a query within a React component, call `useFilterStudentByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilterStudentByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilterStudentByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFilterStudentByUserIdQuery(baseOptions?: Apollo.QueryHookOptions<Types.FilterStudentByUserIdQuery, Types.FilterStudentByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.FilterStudentByUserIdQuery, Types.FilterStudentByUserIdQueryVariables>(FilterStudentByUserIdDocument, options);
      }
export function useFilterStudentByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.FilterStudentByUserIdQuery, Types.FilterStudentByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.FilterStudentByUserIdQuery, Types.FilterStudentByUserIdQueryVariables>(FilterStudentByUserIdDocument, options);
        }
export type FilterStudentByUserIdQueryHookResult = ReturnType<typeof useFilterStudentByUserIdQuery>;
export type FilterStudentByUserIdLazyQueryHookResult = ReturnType<typeof useFilterStudentByUserIdLazyQuery>;
export type FilterStudentByUserIdQueryResult = Apollo.QueryResult<Types.FilterStudentByUserIdQuery, Types.FilterStudentByUserIdQueryVariables>;
export const GetAllStudentsDocument = gql`
    query getAllStudents {
  students {
    data {
      attributes {
        user {
          data {
            id
            attributes {
              firstname
              lastname
              email
              avatar {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
        github
        linkedin
        start_date
        cohort {
          data {
            attributes {
              name
              start_date
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllStudentsQuery__
 *
 * To run a query within a React component, call `useGetAllStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllStudentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllStudentsQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetAllStudentsQuery, Types.GetAllStudentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetAllStudentsQuery, Types.GetAllStudentsQueryVariables>(GetAllStudentsDocument, options);
      }
export function useGetAllStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetAllStudentsQuery, Types.GetAllStudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetAllStudentsQuery, Types.GetAllStudentsQueryVariables>(GetAllStudentsDocument, options);
        }
export type GetAllStudentsQueryHookResult = ReturnType<typeof useGetAllStudentsQuery>;
export type GetAllStudentsLazyQueryHookResult = ReturnType<typeof useGetAllStudentsLazyQuery>;
export type GetAllStudentsQueryResult = Apollo.QueryResult<Types.GetAllStudentsQuery, Types.GetAllStudentsQueryVariables>;
export const GetMeDocument = gql`
    query getMe {
  me {
    id
    role {
      id
      name
    }
    email
    id
    username
    firstname
    lastname
    avatar {
      url
    }
  }
}
    `;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetMeQuery, Types.GetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetMeQuery, Types.GetMeQueryVariables>(GetMeDocument, options);
      }
export function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetMeQuery, Types.GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetMeQuery, Types.GetMeQueryVariables>(GetMeDocument, options);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = Apollo.QueryResult<Types.GetMeQuery, Types.GetMeQueryVariables>;