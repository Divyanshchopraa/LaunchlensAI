export const getDashboardService = async (uid: string) => {

  return {
    user: {
      id: uid,
      name: "Demo User"
    },
    startups: []
  };

};