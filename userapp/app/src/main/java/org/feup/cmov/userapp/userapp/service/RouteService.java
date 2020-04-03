package org.feup.cmov.userapp.userapp.service;

import org.feup.cmov.userapp.userapp.model.Route;
import org.feup.cmov.userapp.userapp.model.User;

import java.util.List;


import retrofit2.Call;
import retrofit2.http.GET;


public interface RouteService {

    @GET("route")
    Call<List<Route>> list();
}
