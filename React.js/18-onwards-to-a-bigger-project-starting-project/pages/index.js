import { MongoClient } from 'mongodb';
import Head from 'next/head';
import { Fragment } from 'react';
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name='description' content='Brose a huge list of higly active React meetups!' />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// * getServerSideProps gain access to req(request for authentication) and res(response for updating every request/multiple updates every second that even revalidate won't help), but slower server-side re-rendering
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // fetch from an api
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // fetch from an api
  const client = await MongoClient.connect('mongodb+srv://WooJay:JayLin@cluster0.ngiu0d5.mongodb.net/meetups?retryWrites=true&w=majority');

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString()
      }))
    },
    revalidate: 1
  };
}

export default HomePage;

