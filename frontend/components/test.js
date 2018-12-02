const SINGLE_MEETING_QUERY = gql`
  query SINGLE_MEETING_QUERY($id: ID!) {
    meeting(where: { id: $id }) {
      id
      title
      description
      largeImage
    }
  }
`;
class SingleMeeting extends Component {
  render() {
    return (
      <Query
        query={SINGLE_MEETING_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.meeting) return <p>No Meeting Found for {this.props.id}</p>;
          const meeting = data.meeting;
          return (
            <SingleMeetingStyles>
              <Head>
                <title>Sick Fits | {meeting.title}</title>
              </Head>
              <img src={meeting.largeImage} alt={meeting.title} />
              <div className="details">
                <h2>Viewing {meeting.title}</h2>
                <p>{meeting.description}</p>
              </div>
            </SingleMeetingStyles>
          );
        }}
      </Query>
    );
  }
}

export default SingleMeeting;
