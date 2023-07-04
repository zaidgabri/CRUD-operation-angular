package Model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.var;
import org.springframework.security.core.authority.SimpleGrantedAuthority;


import java.util.Collections;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static Model.Permission.*;


@RequiredArgsConstructor
public enum Role {

  USER(Collections.emptySet()),
  ADMIN(
          Set.of(
                  ADMIN_READ,
                  ADMIN_UPDATE,
                  ADMIN_DELETE,
                  ADMIN_CREATE,
                  AGENT_READ,
                  AGENT_UPDATE,
                  AGENT_DELETE,
                  AGENT_CREATE
          )
  ),
  AGENT(
          Set.of(
                  AGENT_READ,
                  AGENT_UPDATE,
                  AGENT_DELETE,
                  AGENT_CREATE
          )
  )

  ;

  @Getter
  private final Set<Permission> permissions;

  public List<SimpleGrantedAuthority> getAuthorities() {
    var authorities = getPermissions()
            .stream()
            .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
            .collect(Collectors.toList());
    authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
    return authorities;
  }
}
