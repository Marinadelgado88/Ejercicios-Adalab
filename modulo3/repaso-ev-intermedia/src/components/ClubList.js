import Club from './Club';

function ClubList() {
  const item = props.clubs.map((clubItem, i) => {
    return (
      <li key={i}>
        <Club dataProp={clubItem} />
      </li>
    );
  });
  return (
    <div>
      <ul>{item}</ul>
    </div>
  );
}

export default ClubList;
