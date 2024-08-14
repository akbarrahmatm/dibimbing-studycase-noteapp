import { SkeletonText } from "@chakra-ui/react";

export default function NoteCardLoading() {
  return (
    <>
      <SkeletonText my="1" p={6} noOfLines={2} spacing="4" skeletonHeight="2" />
      <SkeletonText my="1" p={6} noOfLines={2} spacing="4" skeletonHeight="2" />
      <SkeletonText my="1" p={6} noOfLines={2} spacing="4" skeletonHeight="2" />
      <SkeletonText my="1" p={6} noOfLines={2} spacing="4" skeletonHeight="2" />
      <SkeletonText my="1" p={6} noOfLines={2} spacing="4" skeletonHeight="2" />
      <SkeletonText my="1" p={6} noOfLines={2} spacing="4" skeletonHeight="2" />
      <SkeletonText my="1" p={6} noOfLines={2} spacing="4" skeletonHeight="2" />
    </>
  );
}
