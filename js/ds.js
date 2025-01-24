const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar', 
    data: {
        labels: ['HTML', 'CSS', 'PHP', 'JAVASCRIPT', 'SITEDB'],
        datasets: [{
            label: 'My Skill',
            data: [85, 70, 35, 15, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        indexAxis: 'y',
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let value = context.raw; // 데이터 값 가져오기
                        return `${value}%`; // 데이터 옆에 "점" 추가
                    }
                }
            }
        },
        animation: {
            onComplete: function() {
                const chart = this.chart;
                const ctx = chart.ctx;

                // 데이터 값 표시
                chart.data.datasets.forEach((dataset, i) => {
                    const meta = chart.getDatasetMeta(i);
                    meta.data.forEach((bar, index) => {
                        const value = dataset.data[index];
                        ctx.fillStyle = 'black'; // 텍스트 색상
                        ctx.font = '12px Arial'; // 폰트 스타일
                        ctx.textAlign = 'center'; // 텍스트 정렬
                        ctx.fillText(`${value}%`, bar.x, bar.y - 5); // 값과 "점" 추가
                    });
                });
            }
        }
    }
});
