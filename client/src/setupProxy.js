const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(createProxyMiddleware("/api/listing", {
        target: `http://localhost:3001/`,
        changeOrigin: true,
    }));
    app.use(createProxyMiddleware("/user/", {
        target: `http://localhost:3001/`,
        changeOrigin: true,
    }));

    app.use(createProxyMiddleware("/api/listing/profile", {
        target: `http://localhost:3001/`,
        changeOrigin: true,
    }));

    app.use(createProxyMiddleware("/api/listing/reserved/", {
        target: `http://localhost:3001/`,
        changeOrigin: true,
    }));

    app.use(createProxyMiddleware("api/listings/reserved", {
        target: `http://localhost:3001/`,
        changeOrigin: true,
    }));

    app.use(createProxyMiddleware("api/listing", {
        target: `http://localhost:3001/`,
        changeOrigin: true,
    }));

    app.use(createProxyMiddleware("/api/listing/near/", {
        target: `http://localhost:3001/`,
        changeOrigin: true,
    }));

    app.use(createProxyMiddleware("/api/availability", {
        target: `http://localhost:3001/`,
        changeOrigin: true,
    }));

    app.use(createProxyMiddleware("api/availability/", {
        target: `http://localhost:3001/`,
        changeOrigin: true,
    }));


    app.use(createProxyMiddleware(`/api/availability/`, {
        target: `http://localhost:3001/`,
        changeOrigin: true,
    }));

    app.use(createProxyMiddleware("/api/availability/", {
        target: `http://localhost:3001/`,
        changeOrigin: true,
    }));

    app.use(createProxyMiddleware("api/listing/profile", {
        target: `http://localhost:3001/`,
        changeOrigin: true,
    }));

    app.use(createProxyMiddleware("/api/listing/profile/", {
        target: `http://localhost:3001/`,
        changeOrigin: true,
    }));

    app.use(createProxyMiddleware("/api/availability/update", {
        target: `http://localhost:3001/`,
        changeOrigin: true,
    }));

    app.use(createProxyMiddleware(`/api/availability/`, {
        target: `http: //localhost:3001/`,
        changeOrigin: true,
    }));

    // app.use("/api/listing", //listingData,
    //     createProxyMiddleware({
    //         target: 'http://localhost:3001/',
    //         changeOrigin: true,
    //     })
    // );

    // app.use("/user/",
    //     createProxyMiddleware({
    //         target: 'http://localhost:3001/',
    //         changeOrigin: true,
    //     })
    // );

    // app.use("/api/listing",
    //     createProxyMiddleware({
    //         target: 'http://localhost:3001/',
    //         changeOrigin: true,
    //     })
    // );

    // app.use("/api/listing/profile",
    //     createProxyMiddleware({
    //         target: 'http://localhost:3001/',
    //         changeOrigin: true,
    //     })
    // );

    // app.use("/api/listing/reserved/",
    //     createProxyMiddleware({
    //         target: 'http://localhost:3001/',
    //         changeOrigin: true,
    //     })
    // );

    // app.use("api/listings/reserved", //{
    //     //     params: {
    //     //         id
    //     //     }
    //     // },
    //     createProxyMiddleware({
    //         target: 'http://localhost:3001/',
    //         changeOrigin: true,
    //     })
    // );

    // app.use("api/listing", // {
    //     //     params: {
    //     //         id
    //     //     }
    //     // },
    //     createProxyMiddleware({
    //         target: 'http://localhost:3001/',
    //         changeOrigin: true,
    //     })
    // );

    // app.use("api/listing/near", //{
    //     //     params: {
    //     //         data
    //     //     }
    //     // },
    //     createProxyMiddleware({
    //         target: 'http://localhost:3001/',
    //         changeOrigin: true,
    //     })
    // );

    // app.use("api/availability", //availabilityData,
    //     createProxyMiddleware({
    //         target: 'http://localhost:3001/',
    //         changeOrigin: true,
    //     })
    // );

    // app.use("api/availability", // availabilityData,
    //     createProxyMiddleware({
    //         target: 'http://localhost:3001/',
    //         changeOrigin: true,
    //     })
    // );

    // app.use(`/api/availability/`, //${id}`,
    //     createProxyMiddleware({
    //         target: 'http://localhost:3001/',
    //         changeOrigin: true,
    //     })
    // );

    // // app.use("api/availability", // {
    // //     //     params: {
    // //     //         dates
    // //     //     }
    // //     // },
    // //     createProxyMiddleware({
    // //         target: 'http://localhost:3001/',
    // //         changeOrigin: true,
    // //     })
    // // );

    // // app.use("/api/listing/profile", //{ listing },
    // //     createProxyMiddleware({
    // //         target: 'http://localhost:3001/',
    // //         changeOrigin: true,
    // //     })
    // //);
    // app.use("/api/listing /profile/", // +id,
    //     createProxyMiddleware({
    //         target: 'http://localhost:3001/',
    //         changeOrigin: true,
    //     })
    // );

    // app.use("/api/availability/update", //newData,
    //     createProxyMiddleware({
    //         target: 'http://localhost:3001/',
    //         changeOrigin: true,
    //     })
    // );

    // app.use(`/api/availability/`, //${id}`,
    //     createProxyMiddleware({
    //         target: 'http://localhost:3001/',
    //         changeOrigin: true,
    //     })
    // );
}