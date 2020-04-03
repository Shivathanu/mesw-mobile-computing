package org.feup.cmov.userapp.userapp.service;

import org.feup.cmov.userapp.userapp.model.User;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;

public interface UserService {

    @POST("user")
    Call<Void> insert(@Body User aluno);

    @GET("user")
    Call<List<User>> list();
}
