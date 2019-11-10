from rest_framework import permissions


class IsSuperUser(permissions.BasePermission):
    """
    Super User permission
    """

    def has_permission(self, request, view):
        if hasattr(request.user, 'is_superuser') and request.user.is_superuser:
            return True
        else:
            return False


class IsAdmin(permissions.BasePermission):
    """
    Admin User permission
    """

    def has_permission(self, request, view):
        if hasattr(request.user, 'is_admin') and request.user.is_admin:
            return True
        else:
            return False


class IsAdminOrSuperUser(permissions.BasePermission):
    def has_permission(self, request, view):
        if (hasattr(request.user, 'is_admin') and request.user.is_admin) or \
                (hasattr(request.user, 'is_superuser') and request.user.is_superuser):
            return True
        else:
            return False


class IsSuperUserOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        if hasattr(request.user, 'is_superuser') and request.user.is_superuser:
            return True
        else:
            return False


# Not sure why I did this mess but for some reason I loved it :D
# TODO: Check if we are using this else delete it
class CustomOrIsAdminOrSuperUserPermission(permissions.BasePermission):
    """
    Permission class to check that a user can update his own resource only
    """

    def has_permission(self, request, view):
        if (hasattr(request.user, 'is_admin') and request.user.is_admin) or \
                (hasattr(request.user, 'is_superuser') and request.user.is_superuser):
            return True
        else:
            if (request.method == 'PUT' or
                    request.method == 'PATCH' or
                    request.method == 'DELETE' or
                    request.method == 'OPTIONS' or
                    request.method == 'GET') and \
                    int(view.kwargs['pk']) != int(request.user.id):
                return False
            return True
