from rest_framework.permissions import BasePermission, SAFE_METHODS


class ComplaintIsOwnerOrReadOnly(BasePermission):
    message = 'You have not filed this complaint!'

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        elif request.user.is_authenticated:
            return obj.user_id == request.user or request.user.is_admin
        return False


class UserIsOwnerOrReadOnly(BasePermission):
    message = 'You have not filed this complaint!'

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        elif request.user.is_authenticated:
            return obj.id == request.user.id or request.user.is_admin
        return False
