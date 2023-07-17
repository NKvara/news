import {db} from "@/components/helper/firebase";
import {collection, getDocs, query, orderBy, limit, startAfter} from "@firebase/firestore";


const newsCollection = collection(db, "news");


const mainQuery = query(newsCollection, orderBy("date", "desc"), limit(1));
const mainDoc = await getDocs(mainQuery);
export const mainArticle = mainDoc.docs.map((doc) => doc.data());


const lastVisibleMain = mainDoc.docs[mainDoc.docs.length - 1];
const latestNewsQuery = query(newsCollection, orderBy("date", "desc"), startAfter(lastVisibleMain), limit(4));
const latestNewsDoc = await getDocs(latestNewsQuery);
export const latestNewsArticle = latestNewsDoc.docs.map((doc) => doc.data());


const lastVisibleLatestNews = latestNewsDoc.docs[latestNewsDoc.docs.length - 1];
const mustReadNewsQuery = query(newsCollection, orderBy("date", "desc"), startAfter(lastVisibleLatestNews), limit(3));
const mustReadNewsDoc = await getDocs(mustReadNewsQuery);
export const mustReadArticle = mustReadNewsDoc.docs.map((doc) => doc.data());


const lastVisibeMustReadNews = mustReadNewsDoc.docs[mustReadNewsDoc.docs.length - 1];
const featuredNewsQuery = query(newsCollection, orderBy("date", "desc"), startAfter(lastVisibeMustReadNews), limit(5));
const featuredNewsDoc = await getDocs(featuredNewsQuery);
export const featuredArticle = featuredNewsDoc.docs.map((doc) => doc.data());