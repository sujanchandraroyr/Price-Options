// import { LineChart, Line, CartesianGrid, XAxis } from 'recharts';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const Chart = () => {

    const data = [
        {"id": 1, "name": "Sujan", "marks": 85},
        {"id": 2, "name": "Roki", "marks": 78},
        {"id": 3, "name": "Billu", "marks": 92},
        {"id": 4, "name": "Puspa", "marks": 80},
        {"id": 5, "name": "Raj", "marks": 88},
        {"id": 6, "name": "Vai", "marks": 75},
        {"id": 7, "name": "Kakui", "marks": 90},
        {"id": 8, "name": "Joni", "marks": 82},
        {"id": 9,  "name": "Rittik", "marks": 87},
        {"id": 10, "name": "Lalu", "marks": 79}
      ];

    return (
        <div>
          <h2>Chart</h2>  
          {/* <LineChart width={800} height={200} data={data}>
        <Line type="monotone" dataKey="marks" stroke="red" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="id" />
        </LineChart> */}

        <BarChart width={600} height={300} data={data}>
    <XAxis dataKey="name"  />
    <YAxis />
    <Bar dataKey="marks" barSize={30} fill="#8884d8"
      />
  </BarChart>
        </div>
    );
};

export default Chart;