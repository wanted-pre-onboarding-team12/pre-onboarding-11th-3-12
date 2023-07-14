export const orgRepoName = (issues: any) => {
  const data =
    issues?.length !== 0 ? issues[0].url?.split('/').slice(4, 6) : null;
  const orgName = data !== null ? data[0].toUpperCase() : null;
  const repoName = data !== null ? data[1].toUpperCase() : null;
  return { orgName, repoName };
};
