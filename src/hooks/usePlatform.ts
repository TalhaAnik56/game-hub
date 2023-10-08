import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data } = usePlatforms();
  const selectedPlatform = data?.results.find(
    (platform) => platform.id === id
  );
  return selectedPlatform;
};

export default usePlatform;
