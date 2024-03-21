
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    
  } from 'recharts';

const Chart2 = () => {
    const data = [
        {"id": 1,  "present": 27, "name": "Sujan", "marks": 95},
        {"id": 2, "present": 19, "name": "Roki", "marks": 78},
        {"id": 3, "present": 16, "name": "Billu", "marks": 92},
        {"id": 4, "present": 30, "name": "Puspa", "marks": 80},
        {"id": 5,  "present": 29, "name": "Raj", "marks": 100},
        {"id": 6,  "present": 14, "name": "Vai", "marks": 75},
        {"id": 7, "present": 18, "name": "Kakui", "marks": 90},
        {"id": 8, "present": 9, "name": "Joni", "marks": 52},
        {"id": 9,  "present": 11, "name": "Rittik", "marks": 87},
        {"id": 10, "present": 24, "name": "Lalu", "marks": 79}
      ];

    return (
        
        
        <ComposedChart
          width={800}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="marks" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="id" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="present" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
      
        
    );
};

export default Chart2;