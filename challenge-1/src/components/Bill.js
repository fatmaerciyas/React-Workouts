export default function Bill({ bill, setBill }) {
  return (
    <div>
      How much was the bill ?
      <input
        type=" text"
        placeholder=""
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}
