import {db} from "@/components/helper/firebase";
import {collection, getDocs, query} from "@firebase/firestore";

const writersCollection = collection(db, "writers");

const mainQuery = query(writersCollection);
const mainDoc = await getDocs(mainQuery);
const getWritersData = mainDoc.docs.map((doc) => doc.data());

const getAuthorPicture = (authorName: string) => {
  const writer = getWritersData.find((element) => element.name == authorName);
  return writer?.pfpimage;
};

export default getAuthorPicture;
