package com.ot.pertain.dto;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Host extends User{
	{
		super.setRole("ROLE_HOST");

	}
	@OneToMany(mappedBy = "host", cascade = CascadeType.ALL)
	@JsonManagedReference("hosting")
	private List<Event> events;
	

}
