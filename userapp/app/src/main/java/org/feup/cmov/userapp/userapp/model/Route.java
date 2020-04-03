package org.feup.cmov.userapp.userapp.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Route {

    // Change to String when UUID
    private int id;
    private String train;
    private String departureStation;
    private String departureTime;
    private String arrivalStation;
    private String arrivalTime;
    private String distanceKm;
    private String stopDurationMin;
    private String price;


   public Route() {
    }

    public int getId() {
        return id;
    }

    public String getTrain() {
        return train;
    }

    public String getDepartureStation() {
        return departureStation;
    }

    public String getDepartureTime() {
        return departureTime;
    }

    public String getArrivalStation() {
        return arrivalStation;
    }

    public String getArrivalTime() {
        return arrivalTime;
    }

    public String getDistanceKm() {
        return distanceKm;
    }

    public String getStopDurationMin() {
        return stopDurationMin;
    }

    public String getPrice() {
        return price;
    }

    @Override
    public String toString() {
        return "From "+getDepartureStation()+" ("+getDepartureTime()+")"+" To "+getArrivalStation()+" ("+getArrivalTime()+")";
    }
}



