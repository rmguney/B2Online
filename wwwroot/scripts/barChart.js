window.renderChart = async () => {
    const chartConfig = {
        series: [
            {
                name: "Teslimat",
                data: [55, 41, 24, 35, 44, 12, 22, 23, 47, 31, 38, 33],
            },
        ],
        chart: {
            type: "bar",
            height: 240,
            toolbar: {
                show: false,
            },
        },
        title: {
            show: "",
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#ea580c"],
        plotOptions: {
            bar: {
                columnWidth: "40%",
                borderRadius: 2,
            },
        },
        xaxis: {
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                style: {
                    colors: "#172554",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
            categories: [
                "Ocak",
                "Subat",
                "Mart",
                "Nisan",
                "Mayis",
                "Haziran",
                "Temmuz",
                "Agustos",
                "Eylul",
                "Ekim",
                "Kasim",
                "Aralik",
            ],
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#172554",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
        },
        grid: {
            show: true,
            borderColor: "#cbd5e1",
            strokeDashArray: 5,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            padding: {
                top: 5,
                right: 20,
            },
        },
        fill: {
            opacity: 0.8,
        },
        tooltip: {
            theme: "dark",
        },
    };

    const chart = new ApexCharts(document.querySelector("#bar-chart"), chartConfig);

    await chart.render();
};