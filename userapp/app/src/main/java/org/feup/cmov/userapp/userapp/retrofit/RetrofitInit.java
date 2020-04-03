package org.feup.cmov.userapp.userapp.retrofit;

import org.feup.cmov.userapp.userapp.service.RouteService;
import org.feup.cmov.userapp.userapp.service.UserService;

import okhttp3.OkHttpClient;
import okhttp3.logging.HttpLoggingInterceptor;
import retrofit2.Retrofit;
import retrofit2.converter.jackson.JacksonConverterFactory;

public class RetrofitInit {

    private final Retrofit retrofit;
    private final String urlAPI= "http://192.168.1.33:3000/";

    public RetrofitInit() {

            HttpLoggingInterceptor interceptor = new HttpLoggingInterceptor();
            interceptor.setLevel(HttpLoggingInterceptor.Level.BODY);

            OkHttpClient.Builder client = new OkHttpClient.Builder();
            client.addInterceptor(interceptor);

        retrofit = new Retrofit.Builder()
                    .baseUrl(urlAPI)
                    .addConverterFactory(JacksonConverterFactory.create())
                    .client(client.build())
                    .build();
        }

        public UserService getUserService() {
            return retrofit.create(UserService.class);
        }

    public RouteService getRouteService() {
        return retrofit.create(RouteService.class);
    }
}
