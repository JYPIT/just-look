export default function PriceCard({ text, price }) {
  return (
    <div>
      <span style={{ display: 'flex', flexDirection: 'columns', gap: '1rem' }}>
        <span>{text}</span>
        <span>
          {price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')} 원
        </span>
      </span>
    </div>
  );
}
