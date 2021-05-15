package com.pad.keeponlearning.dto;

import com.pad.keeponlearning.entity.User;
import lombok.Data;

@Data
public class Register {
   private  User user;

   public User getUser() {
      return user;
   }

}
