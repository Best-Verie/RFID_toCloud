package com.rfid.rfid_backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import javax.persistence.Entity;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class Card {
    @Id
    public Long card_id;
    public void setId(Long id) {
        this.card_id = id;
    }
    @javax.persistence.Id
    public Long getId() {
        return card_id;
    }

    public String owner;
    public Integer current_balance;

}